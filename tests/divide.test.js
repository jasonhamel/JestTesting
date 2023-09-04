const divide = require("../math_classes/divide");

test("Test the zero case by dividing 0 by itself", () => {
  expect(divide(0, 0)).toBe(NaN);
});

test("Test the negative zero case by dividing -0 by itself", () => {
  expect(divide(-0, -0)).toBe(NaN);
});

test("Test the 1 case by dividing 1 by itself", () => {
  expect(divide(1, 1)).toBe(1);
});

test("Test the 1 case by dividing -1 by itself", () => {
  expect(divide(-1, -1)).toBe(1);
});

test("Test the 1 case by dividing 800 by itself", () => {
  expect(divide(800, 800)).toBe(1);
});

test("Test the 1 case by dividing -800 by itself", () => {
  expect(divide(-800, -800)).toBe(1);
});

test("Test the -1 case by dividing -800 by itself", () => {
  expect(divide(-800, 800)).toBe(-1);
});

test("Test the -1 case by dividing -800 by itself", () => {
  expect(divide(800, -800)).toBe(-1);
});

test("Test the n case by dividing 800 by 17", () => {
  expect(divide(800, 17)).toBe(47.05882352941177);
});

test("Test the -n case by dividing 800 by -17", () => {
  expect(divide(800, -17)).toBe(-47.05882352941177);
});

test("Test the n case by dividing 17 by 800", () => {
  expect(divide(17, 800)).toBe(0.02125);
});

test("Test the -n case by dividing -17 by 800", () => {
  expect(divide(-17, 800)).toBe(-0.02125);
});
