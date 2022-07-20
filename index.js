/**
 *
 * @param color : HEX color value
 * @returns
 */
function colorWithoutOpacity(color) {
  const deriveHex = color.replace("#", "").split(/(?=(?:..)*$)/);
  const a = 0.6;
  // @ts-ignore
  const r = Math.floor(`0x${deriveHex[0]}` * a + 0xff * (1 - a));
  // @ts-ignore
  const g = Math.floor(`0x${deriveHex[1]}` * a + 0xff * (1 - a));
  // @ts-ignore
  const b = Math.floor(`0x${deriveHex[2]}` * a + 0xff * (1 - a));

  return "#" + ((r << 16) | (g << 8) | b).toString(16);
}

export default colorWithoutOpacity;
