const sum = require("../lib/sum");

// test 2 values to be exactly identical
test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
