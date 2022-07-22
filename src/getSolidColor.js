function isHexColor(hex) {
  const regExp = /^#[0-9A-F]{6}$/i;
  return regExp.test(hex);
}

/**
 * Consumes a hex color and opacity value and returns a hex value mixing the opacity for a new solid color
 *
 *
 * @param color : HEX color value
 * @param opacity : 0-1 value
 * @returns
 */
function getSolidColor(color, opacity = 0.6) {
  if (!color) {
    throw new Error("Null or undefined value for color.");
  }

  if (!isHexColor(color)) {
    throw new Error(`${color} is not a valid hex value.`);
  }

  const deriveHex = color.replace("#", "").split(/(?=(?:..)*$)/);

  const r = Math.floor(`0x${deriveHex[0]}` * opacity + 0xff * (1 - opacity));
  const g = Math.floor(`0x${deriveHex[1]}` * opacity + 0xff * (1 - opacity));
  const b = Math.floor(`0x${deriveHex[2]}` * opacity + 0xff * (1 - opacity));

  return "#" + ((r << 16) | (g << 8) | b).toString(16);
}

module.exports = getSolidColor;
