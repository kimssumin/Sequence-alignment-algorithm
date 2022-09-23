import {alignment_sequence} from './calc.js';
import {dna} from './dna.js';
// DNA ver Protein ver 선택


// DNA 의 경우
let seq1 = 'ACTGATTCA';
let seq2 = 'ACGCATCA';

let lseq1 = [...seq1];
let lseq2 = [...seq2];

let gap_score = -2;
let match_score = 2;
let mismatch_score = -3;

console.log(dna(seq1, seq2, lseq1, lseq2, gap_score, match_score, mismatch_score));

// Protein의 경우
/* ex)
first seq : HEAGAWGHEE
second seq : PAWHEAE
gap opening penalty : -10
gap extension penalty : -10
*/

/*
let seq1 = 'HEAGAWGHEE'; //나중에 입력으로 수정
let seq2 = 'PAWHEAE'; //나중에 입력으로 수정

let lseq1 = [...seq1];
let lseq2 = [...seq2];

let gap_opening = -10; //나중에 입력으로 수정
let gap_extension_penalty = -2; //나중에 입력으로 수정

const score_list = [];
let best_score = [-1, -100000];
for (let i = 0; i < 8; i++){
  score_list.push(alignment_sequence(seq1, seq2, lseq1, lseq2, gap_opening, gap_extension_penalty, i)[2]);
  if (alignment_sequence(seq1, seq2, lseq1, lseq2, gap_opening, gap_extension_penalty, i)[2] >= best_score[1]){
    best_score[1] = alignment_sequence(seq1, seq2, lseq1, lseq2, gap_opening, gap_extension_penalty, i)[2];
    best_score[0] = i;
  } 
}
console.log(score_list);
console.log(best_score[1])
console.log(...alignment_sequence(seq1, seq2, lseq1, lseq2, gap_opening, gap_extension_penalty, best_score[0])[0]);
console.log(...alignment_sequence(seq1, seq2, lseq1, lseq2, gap_opening, gap_extension_penalty, best_score[0])[1]);
*/
