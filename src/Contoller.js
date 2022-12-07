import { dna } from './model/Calc.js';
import { $dnasubmit, $proteinsubmit } from './utils/data/Element.js';
import { $ } from './utils/Utils.js';

class Controller {
  constructor() {
    this.init();
  }

  init() {
    $proteinsubmit.addEventListener('click', this.proteinStart);
    $dnasubmit.addEventListener('click', this.dnaStart);
  }

  dnaStart(event) {
    event.preventDefault();
    const seq1 = $('#dseq1').value;
    const seq2 = $('#dseq2').value;
    const gap_score = $('#gap_score').value;
    const match_score = $('#match_score').value;
    const mismatch_score = $('#mismatch_score').value;
    console.log(dna(seq1, seq2, gap_score, match_score, mismatch_score));
  }

  proteinStart(event) {}
}

export const controller = new Controller();
