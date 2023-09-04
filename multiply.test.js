const multiply = require("./multiply");

test("Test the zero case by multiplying zero by itself", () => {
  expect(multiply(0, 0)).toBe(0);
});

test("Test the zero case by multiplying zero by 1", () => {
  expect(multiply(0, 1)).toBe(0);
});

test("Test the 1 case by mutiplying 1 by itself", () => {
  expect(multiply(1, 1)).toBe(1);
});

test("Test the 1 case by mutiplying 1 by 700", () => {
  expect(multiply(1, 700)).toBe(700);
});

test("Test the negative case by mutiplying -1 by 700", () => {
  expect(multiply(-1, 700)).toBe(-700);
});

test("Test the double negative case by mutiplying -1 by -700", () => {
  expect(multiply(-1, -700)).toBe(700);
});

test("Test the n case by mutiplying 1000 by 700", () => {
  expect(multiply(1000000, 700)).toBe(700000000);
});
