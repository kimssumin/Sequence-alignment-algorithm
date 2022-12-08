import { alignment_sequence } from '../model/Calc.js';

export function dna(seq1, seq2, gap_score, match_score, mismatch_score) {
  let answer = [];
  const lseq1 = [...seq1];
  const lseq2 = [...seq2];
  let score_matrix = Array.from(Array(seq2.length + 2), () => new Array(seq1.length + 2).fill('0'));
  for (let i = 2; i < seq1.length + 2; i++) {
    score_matrix[0][i] = lseq1[i - 2];
  }
  for (let i = 2; i < seq2.length + 2; i++) {
    score_matrix[i][0] = lseq2[i - 2];
  }

  for (let i = 1; i < seq1.length + 2; i++) {
    if (i == 1) {
      score_matrix[1][i] = '0';
    } else {
      let a = parseInt(score_matrix[1][i - 1]) + parseInt(gap_score);
      score_matrix[1][i] = String(a);
    }
  }

  for (let i = 1; i < seq2.length + 2; i++) {
    if (i == 1) {
      score_matrix[i][1] = '0';
    } else {
      let a = parseInt(score_matrix[i - 1][1]) + parseInt(gap_score);
      score_matrix[i][1] = String(a);
    }
  }

  let direction_matrix_2 = Array.from(Array(seq2.length + 2), () =>
    new Array(seq1.length + 2).fill(0)
  );
  let direction_matrix = [];
  for (let i = 0; i < 3; i++) {
    direction_matrix.push(direction_matrix_2);
  }
  let s = 100000;
  for (let i = 2; i < seq2.length + 2; i++) {
    for (let j = 2; j < seq1.length + 2; j++) {
      if (score_matrix[i][0] == score_matrix[0][j]) {
        s = match_score;
      } else {
        s = mismatch_score;
      }
      let s1 = parseInt(score_matrix[i - 1][j - 1]) + parseInt(s);
      let s2 = parseInt(score_matrix[i - 1][j]) + parseInt(gap_score);
      let s3 = parseInt(score_matrix[i][j - 1]) + parseInt(gap_score);

      score_matrix[i][j] = String(Math.max(s1, s2, s3));
      if (String(Math.max(s1, s2, s3)) == String(s1)) {
        direction_matrix[0][i][j] = 1;
      }
      if (String(Math.max(s1, s2, s3)) == String(s2)) {
        direction_matrix[1][i][j] = 1;
      }
      if (String(Math.max(s1, s2, s3)) == String(s3)) {
        direction_matrix[2][i][j] = 1;
      }
    }
  }

  let start_seq1 = seq1.length + 1;
  let start_seq2 = seq2.length + 1;
  let rev_seq1 = [];
  let rev_seq2 = [];
  let sc1 = -100000;
  let sc2 = -100000;
  let sc3 = -100000;

  for (let i = seq2.length + 1; i > 1; i--) {
    for (let j = seq1.length + 1; j > 1; j--) {
      //console.log(i, j)
      if (i == start_seq2 && j == start_seq1) {
        if (direction_matrix[0][i][j] == 1) {
          sc1 = parseInt(score_matrix[i - 1][j - 1]);
        } else {
          sc1 = -1000000;
        }
        if (direction_matrix[1][i][j] == 1) {
          sc2 = parseInt(score_matrix[i - 1][j]);
        } else {
          sc2 = -1000000;
        }
        if (direction_matrix[2][i][j] == 1) {
          sc3 = parseInt(score_matrix[i][j - 1]);
        } else {
          sc3 = -1000000;
        }

        if (String(Math.max(sc1, sc2, sc3)) == String(sc1)) {
          rev_seq1.push(score_matrix[0][j]);
          rev_seq2.push(score_matrix[i][0]);
          start_seq1 -= 1;
          start_seq2 -= 1;
        } else if (String(Math.max(sc1, sc2, sc3)) == String(sc2)) {
          rev_seq1.push('-');
          rev_seq2.push(score_matrix[i][0]);
          start_seq2 -= 1;
        } else {
          rev_seq1.push(score_matrix[0][j]);
          rev_seq2.push('-');
          start_seq1 -= 1;
        }

        if (start_seq2 == 1 && start_seq1 == 2) {
          rev_seq1.push(score_matrix[0][start_seq1]);
          rev_seq2.push('-');
          break;
        } else if (start_seq1 == 1 && start_seq2 == 2) {
          rev_seq2.push(score_matrix[start_seq2][0]);
          rev_seq1.push('-');
          break;
        }
      }
    }
  }

  answer.push(rev_seq1.reverse());
  answer.push(rev_seq2.reverse());
  return answer;
}

export function protein(seq1, seq2, gap_opening, gap_extension) {
  const score_list = [];
  let best_score = [-1, -1e9];
  for (let i = 0; i < 8; i++) {
    score_list.push(alignment_sequence(seq1, seq2, gap_opening, gap_extension, i)[2]);
    if (alignment_sequence(seq1, seq2, gap_opening, gap_extension, i)[2] >= best_score[1]) {
      best_score[1] = alignment_sequence(seq1, seq2, gap_opening, gap_extension, i)[2];
      best_score[0] = i;
    }
  }

  const res1 = alignment_sequence(seq1, seq2, gap_opening, gap_extension, best_score[0])[0].join(
    ' '
  );
  const res2 = alignment_sequence(seq1, seq2, gap_opening, gap_extension, best_score[0])[1].join(
    ' '
  );

  return [res1, res2];
}
