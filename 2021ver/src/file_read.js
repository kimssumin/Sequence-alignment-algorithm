import fs from 'fs';
let lines = [];
const matrix_name = [
  'BLOSUM62',
  'BLOSUM45',
  'BLOSUM50',
  'BLOSUM80',
  'BLOSUM90',
  'PAM30',
  'PAM70',
  'PAM250',
];
for (let i = 0; i < 8; i++) {
  let file_path = '../../utils/substitution_matrix/' + matrix_name[i] + '.txt';
  lines.push(fs.readFileSync(file_path).toString().split('\n'));
}

//lines.push(fs.readFileSync('../substitution_matrix/BLOSUM62.txt').toString().split("\n"));

export class files {
  constructor() {
    this.all_matrix = [];
  }

  //파일 불러오기
  blosum62() {
    this.all_matrix['BLOSUM62'] = [];
    for (let i = 0; i < lines[0].length - 1; i++) {
      lines[0][i] = lines[0][i].replace(/\s\s/gi, ' ');
      //console.log(lines[i])
      let a = lines[0][i].split(' ');

      a.pop();
      if (i === 0) {
        a.shift();
      }
      this.all_matrix['BLOSUM62'].push(a);
      console.log(a);
    }
  }

  all_file_() {
    for (let c = 0; c < 8; c++) {
      this.all_matrix[matrix_name[c]] = [];
      for (let i = 0; i < lines[c].length - 1; i++) {
        lines[c][i] = lines[c][i].replace(/\s\s/gi, ' ');
        //console.log(lines[i])
        let a = lines[c][i].split(' ');

        a.pop();
        if (i === 0) {
          a.shift();
        }
        this.all_matrix[matrix_name[c]].push(a);
        //console.log('>>' + matrix_name[c]);
        //console.log(a);
      }
    }
  }
}
