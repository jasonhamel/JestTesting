const subtract = require("../math_classes/subtract");

test("Tests the zero case by subtracting zero from itself for 0", () => {
  expect(subtract(0, 0)).toBe(0);
});

test("Tests the one case by subtracting zero from 1", () => {
  expect(subtract(1, 0)).toBe(1);
});

test("Tests the negative one case by subtracting 1 from 0", () => {
  expect(subtract(0, 1)).toBe(-1);
});

test("Tests the negative n case by subtracting -23423432314 from -444", () => {
  expect(subtract(-444, -23423432314)).toBe(-23423432758);
});
