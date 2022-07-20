const getSolidColor = require("../getSolidColor.js");

describe("Mixing different opacity to Red color", () => {
  test("Mix 0.6 opacity", () => {
    expect(getSolidColor("#FF0000", 0.6)).toBe("#ff6666");
  });

  test("Mix 0.3 opacity", () => {
    expect(getSolidColor("#FF0000", 0.3)).toBe("#ffb2b2");
  });

  test("Mix 1 opacity", () => {
    expect(getSolidColor("#FF0000", 1)).toBe("#ff0000");
  });

  test("Mix 0 opacity", () => {
    expect(getSolidColor("#FF0000", 0)).toBe("#ffffff");
  });
});
