/**
 * Consumes a hex color and opacity value and returns a hex value mixing the opacity for a new solid color
 *
 *
 * @param color : HEX color value
 * @param opacity : 0-1 value
 * @returns
 */
function getSolidColor(color, opacity = 0.6) {
  const deriveHex = color.replace("#", "").split(/(?=(?:..)*$)/);
  const r = Math.floor(`0x${deriveHex[0]}` * opacity + 0xff * (1 - a));
  const g = Math.floor(`0x${deriveHex[1]}` * opacity + 0xff * (1 - a));
  const b = Math.floor(`0x${deriveHex[2]}` * opacity + 0xff * (1 - a));

  return "#" + ((r << 16) | (g << 8) | b).toString(16);
}

export default getSolidColor;
