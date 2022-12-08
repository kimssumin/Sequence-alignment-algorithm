import { dna, protein } from './model/Sequence.js';
import { $dnasubmit, $proteinsubmit } from './utils/data/Element.js';
import { dnaForm, proteinForm } from './view/InputView.js';

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
    const dnaInputs = dnaForm();
    console.log(
      dna(
        dnaInputs.seq1,
        dnaInputs.seq2,
        dnaInputs.gap_score,
        dnaInputs.match_score,
        dnaInputs.mismatch_score
      )
    );
  }

  proteinStart(event) {
    event.preventDefault();
    const proteinInputs = proteinForm();
    console.log(
      protein(
        proteinInputs.seq1,
        proteinInputs.seq2,
        proteinInputs.gap_opening,
        proteinInputs.gap_extension
      )
    );
  }
}

export const controller = new Controller();
