export const $ = (selector) => document.querySelector(selector);

export function createElement(tagName, tagText) {
  const $create = document.createElement(tagName);
  $create.innerText = tagText;

  return $create;
}

export function resultElement(seq1, seq2) {
  return `
  <h4>Result</h4>
  <div id = 'main'>
  <p>${seq1}</p><p>${seq2}</p>
  </div>
  `;
}
