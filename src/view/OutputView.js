import { $result } from '../utils/data/Element.js';
import { resultElement } from '../utils/Utils.js';

export function dnaOutput(dnaInputs, dnaResult) {
  const seq1 = dnaResult[0].join('');
  const seq2 = dnaResult[1].join('');
  const inputs = `
  <h3><span id = "rst">📄 결과</span></h3>
  <table id = "inputtbl">
  <tr><td><span>Sequence 1</span></td><td>${dnaInputs.seq1}</td></tr>
  <tr><td><span>Sequence 2</span></td><td>${dnaInputs.seq2}</td></tr>
  <tr><td><span>Gap score</span></td><td>${dnaInputs.gap_score}</td></tr>
  <tr><td><span>Match score</span></td><td>${dnaInputs.match_score}</td></tr>
  <tr><td><span>Mismatch score</span></td><td>${dnaInputs.mismatch_score}</td></tr>
  </table>
  `;

  $result.innerHTML = resultElement(inputs, seq1, seq2);
  $result.style.display = 'block';
}

export function proteinOutput(proteinInputs, proteinResult) {
  const seq1 = proteinResult[0];
  const seq2 = proteinResult[1];
  const inputs = `
  <h3><span id = "rst">📄 결과</span></h3>  
  <table id = "inputtbl">
  <tr><td><span>Sequence 1</span></td><td>${proteinInputs.seq1}</td></tr>
  <tr><td><span>Sequence 2</span></td><td>${proteinInputs.seq2}</td></tr>
  <tr><td><span>Gap opening</span></td><td>${proteinInputs.gap_opening}</td></tr>
  <tr><td><span>Gap extension</span></td><td>${proteinInputs.gap_extension}</td></tr>
  </table>
  `;
  $result.innerHTML = resultElement(inputs, seq1, seq2);
  $result.style.display = 'block';
}
