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

describe("Function validity", () => {
  test("Provide valid color", () => {
    expect(getSolidColor("#FF0000", 0.6)).toBe("#ff6666");
  });

  test("Provde undefined value", () => {
    expect(getSolidColor(undefined)).toThrow(
      "Null or undefined value for color."
    );
  });

  test("Provde null value", () => {
    expect(getSolidColor(null)).toThrow("Null or undefined value for color.");
  });

  test("Provde wrong hex value", () => {
    expect(getSolidColor("#ZZXXVV")).toThrow(
      "#ZZXXVV is not a valid hex value."
    );
  });

  test("Provde random value", () => {
    expect(getSolidColor("dadsad")).toThrow(
      "#dadsad is not a valid hex value."
    );
  });
});
