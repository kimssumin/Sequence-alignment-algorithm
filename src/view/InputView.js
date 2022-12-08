import { $ } from '../utils/Utils.js';

export function dnaForm() {
  const seq1 = $('#dseq1').value;
  const seq2 = $('#dseq2').value;
  const gap_score = $('#gap_score').value;
  const match_score = $('#match_score').value;
  const mismatch_score = $('#mismatch_score').value;
  return { seq1, seq2, gap_score, match_score, mismatch_score };
}

export function proteinForm() {
  const seq1 = $('#pseq1').value;
  const seq2 = $('#pseq2').value;
  const gap_opening = $('#gap_opening').value;
  const gap_extension = $('#gap_extension').value;
  return { seq1, seq2, gap_opening, gap_extension };
}
