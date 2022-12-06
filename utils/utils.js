export const $ = (selector) => document.querySelector(selector);

export function createElement(tagName, tagText) {
  const $create = document.createElement(tagName);
  $create.innerText = tagText;

  return $create;
}
