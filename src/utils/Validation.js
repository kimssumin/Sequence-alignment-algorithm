export function blankCheck(forms) {
  const check = forms.map((value, idx) => {
    if (idx >= 2) {
      if (value.length == 0 || !scoreNumCheck(value)) {
        return false;
      }
      return true;
    } else {
      if (value.length === 0) {
        return false;
      }
      return true;
    }
  });

  if (check.includes(false)) {
    return false;
  }
  return true;
}

export function scoreNumCheck(score) {
  const onlyNmbr = /^[+-]?\d*(\.?\d*)$/;
  if (onlyNmbr.test(score)) {
    return true;
  }
  return false;
}
