function jasonSum(a, b) {
  return a + b;
}

function jasonSubtract(a, b) {
  if (a < 0 && b < 0) {
    return a + b;
  }
  return a - b;
}

function jasonMultiply(a, b) {
  return a * b;
}

function jasonDivide(a, b) {
  return a / b;
}

module.exports = { jasonSum, jasonSubtract, jasonMultiply, jasonDivide };
