import {
  blosum45,
  blosum50,
  blosum62,
  blosum80,
  blosum90,
} from './substitution_matrix/BLOSUMmatrixs.js';
import { pam250, pam30, pam70 } from './substitution_matrix/PAMmatrixs.js';

const matrixs = [blosum45, blosum50, blosum62, blosum80, blosum90, pam250, pam30, pam70];
const matrix_name = [
  'BLOSUM45',
  'BLOSUM50',
  'BLOSUM62',
  'BLOSUM80',
  'BLOSUM90',
  'PAM250',
  'PAM30',
  'PAM70',
];
export class files {
  constructor() {
    this.all_matrix = {};
  }

  all_files() {
    matrixs.forEach((matrix, idx) => {
      this.all_matrix[matrix_name[idx]] = this.getEachMatrix(matrix);
    });
    console.log(this.all_matrix);
  }

  getEachMatrix(matrix) {
    const all = matrix.split('\n');
    all.pop();
    const matrixArr = all.map((line) => {
      line = line.replace(/\s\s/gi, ' ');
      const lineArr = line.split(' ');
      if (lineArr[0] === '') {
        lineArr.shift();
      }
      lineArr.pop();
      return lineArr;
    });
    matrixArr.splice(0, 1);
    matrixArr.splice(matrixArr.length - 1, 1);
    return matrixArr;
  }
}
// const file2 = new files();
// file2.all_files();
