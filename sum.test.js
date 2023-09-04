const sum = require("./sum");

test("Tests the zero case of adding zeros together to make zero", () => {
  expect(sum(0, 0)).toBe(0);
});

test("Tests the one case by adding zero to one to make one", () => {
  expect(sum(0, 1)).toBe(1);
});

test("Tests the n case by adding 999999999 to itself to make 1999999998", () => {
  expect(sum(999999999, 999999999)).toBe(1999999998);
});
