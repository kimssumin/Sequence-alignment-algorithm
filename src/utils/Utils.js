export const $ = (selector) => document.querySelector(selector);

export function createElement(tagName, tagText) {
  const $create = document.createElement(tagName);
  $create.innerText = tagText;

  return $create;
}

function tdelements(seq) {
  let td = '';
  [...seq].forEach((word) => {
    td += '<td>' + word + '</td>';
  });
  return td;
}
export function resultElement(inputs, seq1, seq2) {
  return (
    `
    <div id = 'resultBox'>
    ` +
    inputs +
    `
    <div id = 'main'>
    <table id = 'resulttbl'>
    <tr>
    ` +
    tdelements(seq1) +
    `</tr><tr>` +
    tdelements(seq2) +
    `</tr>
    </table>
    </div>
    </div>
    `
  );
}
