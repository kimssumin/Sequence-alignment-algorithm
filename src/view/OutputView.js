import { $result } from '../utils/data/Element.js';
import { resultElement } from '../utils/Utils.js';

export function dnaOutput(dnaInputs, dnaResult) {
  const seq1 = dnaResult[0].join(' ');
  const seq2 = dnaResult[1].join(' ');
  const inputs = `Sequence 1 | ${dnaInputs.seq1} <br>
  Sequence 2 | ${dnaInputs.seq2} <br>
  gap score | ${dnaInputs.gap_score}<br>
  match score | ${dnaInputs.match_score}<br>
  mismatch score | ${dnaInputs.mismatch_score}<br>`;

  $result.innerHTML = inputs + resultElement(seq1, seq2);
  $result.style.display = 'block';
}

export function proteinOutput(proteinInputs, proteinResult) {
  const seq1 = proteinResult[0];
  const seq2 = proteinResult[1];
  const inputs = `Sequence 1 | ${proteinInputs.seq1} <br>
  Sequence 2 | ${proteinInputs.seq2} <br>
  gap opening | ${proteinInputs.gap_opening}<br>
  gap extension | ${proteinInputs.gap_extension}<br>`;
  $result.innerHTML = inputs + resultElement(seq1, seq2);
  $result.style.display = 'block';
}
