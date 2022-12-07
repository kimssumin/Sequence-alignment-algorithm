import { controller } from './Contoller.js';
import { $dnaButton, $dnaForm, $proteinButton, $proteinForm } from './utils/data/Element.js';

$dnaButton.addEventListener('click', onclickFormStart);
$proteinButton.addEventListener('click', onclickFormStart);

function onclickFormStart(event) {
  switch (event.target.id) {
    case 'dnaButton':
      $dnaForm.style.display = 'block';
      $proteinForm.style.display = 'none';
      controller.dnaStart();
      break;
    case 'proteinButton':
      $proteinForm.style.display = 'block';
      $dnaForm.style.display = 'none';
      controller.proteinStart();
      break;
  }
}
