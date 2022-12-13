// Protein ver.

//TODO: 수정 - file
import { files } from '../utils/File.js';

const File = new files();
//Matrix score
const matrix = [
  'BLOSUM62',
  'BLOSUM45',
  'BLOSUM50',
  'BLOSUM80',
  'BLOSUM90',
  'PAM30',
  'PAM70',
  'PAM250',
];
File.all_files();

export function matrix_score(amino1, amino2, matrix_num) {
  let a = 0;
  let b = 0;
  const strs = matrix[matrix_num];

  for (let i = 1; i < File.all_matrix[strs].length; i++) {
    if (File.all_matrix[strs][0][i] == amino1) {
      a = i;
    }
  }
  for (let i = 1; i < File.all_matrix[strs].length; i++) {
    if (File.all_matrix[strs][i][0] == amino2) {
      b = i;
    }
  }
  const target_score = File.all_matrix[strs][a][b];

  return target_score;
}

export function score_matrix(seq1, seq2, lseq1, lseq2, gap_opening) {
  let score_matrix = Array.from(Array(seq2.length + 2), () => new Array(seq1.length + 2).fill('0'));
  for (let i = 2; i < seq1.length + 2; i++) {
    score_matrix[0][i] = lseq1[i - 2];
  }
  for (let i = 2; i < seq2.length + 2; i++) {
    score_matrix[i][0] = lseq2[i - 2];
  }

  for (let j = 1; j < seq1.length + 2; j++) {
    if (j == 1) {
      score_matrix[1][j] = '0';
    } else {
      let a = parseInt(score_matrix[1][j - 1]) + gap_opening;
      score_matrix[1][j] = String(a);
    }
  }

  for (let j = 1; j < seq2.length + 2; j++) {
    if (j == 1) {
      score_matrix[j][1] = '0';
    } else {
      let a = parseInt(score_matrix[j - 1][1]) + gap_opening;
      score_matrix[j][1] = String(a);
    }
  }
  //console.log(score_matrix)
  return score_matrix;
}

// let seq1 = 'HEAGAWGHEE'; //나중에 입력으로 수정
// let seq2 = 'PAWHEAE';
// let lseq1 = [...seq1];
// let lseq2 = [...seq2];
// score_matrix(seq1, seq2, lseq1,lseq2,-10);

export function direction_matrix(seq1, seq2) {
  const direction_matrix_2 = Array.from(Array(seq2.length + 2), () =>
    new Array(seq1.length + 2).fill(0)
  );
  const direction_matrix = [];
  for (let i = 0; i < 3; i++) {
    direction_matrix.push(direction_matrix_2);
  }
  //console.log(direction_matrix)
  return direction_matrix;
}
