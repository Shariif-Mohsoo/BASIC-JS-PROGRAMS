/*
 *   Let's create our first class in JS.
 *   The new keyword just create the empty blank object.
 */
class Color {
  constructor(r, g, b, color) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = color;
  }
  innerRGBFormat() {
    const { r, g, b } = this;
    return `${r}, ${g}, ${b}`;
  }
  rgb() {
    return `rgb(${this.innerRGBFormat()})`;
  }
  rgba(a = 1.0) {
    return `rgba(${this.innerRGBFormat()}, ${a})`;
  }
  hex() {
    const { r, g, b } = this;
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
  display() {
    console.log(this);
    console.log("Hex: ", this.hex());
    console.log(this.rgb());
    console.log(this.rgba());
  }
}
const black = new Color(0, 0, 0, "Black");
black.display();
const white = new Color(255, 255, 255, "White");
white.display();
