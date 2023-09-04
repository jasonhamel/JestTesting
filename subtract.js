function subtract(a, b) {
  if (a < 0 && b < 0) {
    return a + b;
  }
  return a - b;
}

module.exports = subtract;
