const jasonMath = require("../math_classes/jason-math");

test("Tests the zero case of adding zeros together to make zero", () => {
  expect(jasonMath.jasonSum(0, 0)).toBe(0);
});

test("Tests the one case by adding zero to one to make one", () => {
  expect(jasonMath.jasonSum(0, 1)).toBe(1);
});

test("Tests the n case by adding 999999999 to itself to make 1999999998", () => {
  expect(jasonMath.jasonSum(999999999, 999999999)).toBe(1999999998);
});

test("Tests the zero case by subtracting zero from itself for 0", () => {
  expect(jasonMath.jasonSubtract(0, 0)).toBe(0);
});

test("Tests the one case by subtracting zero from 1", () => {
  expect(jasonMath.jasonSubtract(1, 0)).toBe(1);
});

test("Tests the negative one case by subtracting 1 from 0", () => {
  expect(jasonMath.jasonSubtract(0, 1)).toBe(-1);
});

test("Tests the negative n case by subtracting -23423432314 from -444", () => {
  expect(jasonMath.jasonSubtract(-444, -23423432314)).toBe(-23423432758);
});

test("Test the zero case by multiplying zero by itself", () => {
  expect(jasonMath.jasonMultiply(0, 0)).toBe(0);
});

test("Test the zero case by multiplying zero by 1", () => {
  expect(jasonMath.jasonMultiply(0, 1)).toBe(0);
});

test("Test the 1 case by mutiplying 1 by itself", () => {
  expect(jasonMath.jasonMultiply(1, 1)).toBe(1);
});

test("Test the 1 case by mutiplying 1 by 700", () => {
  expect(jasonMath.jasonMultiply(1, 700)).toBe(700);
});

test("Test the negative case by mutiplying -1 by 700", () => {
  expect(jasonMath.jasonMultiply(-1, 700)).toBe(-700);
});

test("Test the double negative case by mutiplying -1 by -700", () => {
  expect(jasonMath.jasonMultiply(-1, -700)).toBe(700);
});

test("Test the n case by mutiplying 1000 by 700", () => {
  expect(jasonMath.jasonMultiply(1000000, 700)).toBe(700000000);
});

test("Test the zero case by dividing 0 by itself", () => {
  expect(jasonMath.jasonDivide(0, 0)).toBe(NaN);
});

test("Test the negative zero case by dividing -0 by itself", () => {
  expect(jasonMath.jasonDivide(-0, -0)).toBe(NaN);
});

test("Test the 1 case by dividing 1 by itself", () => {
  expect(jasonMath.jasonDivide(1, 1)).toBe(1);
});

test("Test the 1 case by dividing -1 by itself", () => {
  expect(jasonMath.jasonDivide(-1, -1)).toBe(1);
});

test("Test the 1 case by dividing 800 by itself", () => {
  expect(jasonMath.jasonDivide(800, 800)).toBe(1);
});

test("Test the 1 case by dividing -800 by itself", () => {
  expect(jasonMath.jasonDivide(-800, -800)).toBe(1);
});

test("Test the -1 case by dividing -800 by itself", () => {
  expect(jasonMath.jasonDivide(-800, 800)).toBe(-1);
});

test("Test the -1 case by dividing -800 by itself", () => {
  expect(jasonMath.jasonDivide(800, -800)).toBe(-1);
});

test("Test the n case by dividing 800 by 17", () => {
  expect(jasonMath.jasonDivide(800, 17)).toBe(47.05882352941177);
});

test("Test the -n case by dividing 800 by -17", () => {
  expect(jasonMath.jasonDivide(800, -17)).toBe(-47.05882352941177);
});

test("Test the n case by dividing 17 by 800", () => {
  expect(jasonMath.jasonDivide(17, 800)).toBe(0.02125);
});

test("Test the -n case by dividing -17 by 800", () => {
  expect(jasonMath.jasonDivide(-17, 800)).toBe(-0.02125);
});
