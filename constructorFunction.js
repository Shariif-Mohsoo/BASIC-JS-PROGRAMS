/*
 *  The new operator lets developers create an instance of a user-defined object
    type or of one of the build-in object types that has constructor function.
    The new keyword does the following    
    1. creates the black, plain js object.
    (if we use new keyword, then the this keyword will be pointing to that object)
    (else it will point to the window)
    2. Links(sets the constructor of) this object to another object.
    3. Passes the newly created object from step 1 as the this context.
    4. Returns this if the function doesn't return its own object.
    //like in the case which is given below.
*/

function Color(r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
}
//these methods will be created in the prototype temple object.
Color.prototype.rgb = function () {
  const { r, g, b } = this;
  return `rgb(${r},${g},${b})`;
};
Color.prototype.hex = function () {
  const { r, g, b } = this;
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};
Color.prototype.rgba = function (a = 1.0) {
  const { r, g, b } = this;
  return `rgba(${r},${g},${b},${a})`;
};
const black = new Color(0, 0, 0);
console.log(black);
console.log(black.rgb());
console.log(black.hex());
console.log(black.rgba(0.5));
