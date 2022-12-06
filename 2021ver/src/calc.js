import { matrix_score, score_matrix, direction_matrix } from "./matrix_score.js";

function gap(rev_seq1, rev_seq2, gap_opening, gap_extension_penalty, matrix_number){
  let sum_score = 0;
  let gap_open_cnt = 0;

  for(let i = 0; i < (rev_seq1).length ; i++){
    let a = rev_seq1[i];
    let b = rev_seq2[i];

    if (a=='-' || b=='-'){
      if (gap_open_cnt != 0){
        sum_score += parseInt(gap_extension_penalty);
      }
      else{
        sum_score += parseInt(gap_opening)
        gap_open_cnt = 1
      }
    }

    else{
      let c = matrix_score(a, b, matrix_number);
      
      sum_score += Number(c);
      gap_open_cnt = 0;
    }
    //console.log(sum_score)
  }

  //console.log("sum_score : ", sum_score);
  return sum_score;
}


function score_calc(seq1, seq2, lseq1, lseq2, gap_opening, matrix_number){
  let all = [];
  let score_matrixs = score_matrix(seq1, seq2, lseq1, lseq2, gap_opening);
  let direction_matrixs = direction_matrix(seq1, seq2)
  for (let i = 2 ; i < seq2.length + 2 ; i++){
    for (let j = 2; j < seq1.length + 2; j++){
      let s1 = parseInt(score_matrixs[i-1][j-1]) + parseInt(matrix_score(score_matrixs[i][0], score_matrixs[0][j], matrix_number));
      let s2 = parseInt(score_matrixs[i-1][j]) + parseInt(gap_opening);
      let s3 =  parseInt(score_matrixs[i][j-1]) + parseInt(gap_opening);

      score_matrixs[i][j] = String(Math.max(s1, s2, s3));
      if (String(Math.max(s1, s2,s3)) == String(s1)){
        direction_matrixs[0][i][j] = 1
      }
      if (String(Math.max(s1, s2,s3)) == String(s2)){
        direction_matrixs[1][i][j] = 1
      }
      if (String(Math.max(s1, s2,s3)) == String(s3)){
        direction_matrixs[2][i][j] = 1
      }
    }
  }
  all['score'] = score_matrixs;
  all['direction'] = direction_matrixs;
  return all;
}



// let seq1 = 'HEAGAWGHEE'; //나중에 입력으로 수정
// let seq2 = 'PAWHEAE';
// let lseq1 = [...seq1];
// let lseq2 = [...seq2];
// let gap_opening = -10;
// let gap_extension = -2;
// console.log(score_calc(seq1, seq2, lseq1, lseq2, -10, 7).score);
// console.log(score_calc(seq1, seq2, lseq1, lseq2, -10, 7).direction);
// score_matrix(seq1, seq2, lseq1,lseq2,-10);

export function alignment_sequence(seq1, seq2, lseq1, lseq2, gap_opening, gap_extension_penalty, matrix_number){
  
  let answer = [];
  let score_matrix_ = score_calc(seq1, seq2, lseq1, lseq2, gap_opening, matrix_number).score;
  //console.log(score_matrix_)
  let direction_matrix_ = score_calc(seq1, seq2, lseq1, lseq2, gap_opening, matrix_number).direction;
  //console.log(direction_matrix_)
  let start_seq1 = seq1.length + 1;
  let start_seq2 = seq2.length + 1;
  let rev_seq1 = [];
  let rev_seq2 = [];
  let sc1 = -100000;
  let sc2 = -100000;
  let sc3 = -100000;

  for (let i =seq2.length + 1; i > 1; i--){
    for (let j = seq1.length + 1; j > 1; j--){
      //console.log(i, j)
      if (i == start_seq2 && j == start_seq1){
        if (direction_matrix_[0][i][j] == 1){
          sc1 = parseInt(score_matrix_[i-1][j-1]);
        }
        else{
          sc1 = -1000000;
        }
        if (direction_matrix_[1][i][j] == 1){
          sc2 = parseInt(score_matrix_[i-1][j]);
        }
        else{
          sc2 = -1000000;
        }
        if (direction_matrix_[2][i][j] == 1){
          sc3 = parseInt(score_matrix_[i][j-1]);
        }
        else{
          sc3 = -1000000;
        }

        if (String(Math.max(sc1, sc2, sc3)) == String(sc1)){
          rev_seq1.push(score_matrix_[0][j]);
          rev_seq2.push(score_matrix_[i][0]);
          start_seq1 -= 1;
          start_seq2 -= 1;
        }
        else if (String(Math.max(sc1,sc2, sc3)) == String(sc2)){
          rev_seq1.push('-');
          rev_seq2.push(score_matrix_[i][0]);
          start_seq2 -= 1;
        }
        else{
          rev_seq1.push(score_matrix_[0][j]);
          rev_seq2.push('-');
          start_seq1 -= 1;
        }

        if (start_seq2 == 1){
          while (start_seq1 != 1){ 
            rev_seq1.push(score_matrix_[0][start_seq1]);
            rev_seq2.push('-');
            start_seq1 -= 1;
          }
        }
        else if (start_seq1 == 1){
          while (start_seq2 != 1){
            rev_seq2.push(score_matrix_[start_seq2][0]);
            rev_seq1.push('-');
            start_seq2 -= 1;
          }
        }
      }
    }
  }

  // console.log(rev_seq1);
  // console.log(rev_seq2);
  //return;
  // console.log(rev_seq1.reverse());
  // console.log(rev_seq2.reverse());
  let gap_score = gap(rev_seq1, rev_seq2, gap_opening, gap_extension_penalty, matrix_number);
  answer.push(rev_seq1.reverse());
  answer.push(rev_seq2.reverse());
  answer.push(gap_score);
  return answer;
}

//console.log(alignment_sequence(seq1, seq2, lseq1, lseq2, gap_opening, gap_extension, 7));

