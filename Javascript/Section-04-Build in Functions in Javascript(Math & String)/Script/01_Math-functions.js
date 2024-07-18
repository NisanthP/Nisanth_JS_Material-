/*
Math.abs(x): returns the absolute value of x, which is the non-negative value of x without any sign.
Math.ceil(x): rounds the number x up to the nearest integer.
Math.floor(x): rounds the number x down to the nearest integer.
Math.round(x): rounds the number x to the nearest integer.
Math.sqrt(x): returns the square root of x.
Math.pow(x, y): returns the value of x raised to the power of y.
Math.max(x1, x2, ...): returns the largest of zero or more numbers.
Math.min(x1, x2, ...): returns the smallest of zero or more numbers.
Math.random(): returns a random number between 0 and 1.
Math.sin(x): returns the sine of x (x is in radians).
Math.cos(x): returns the cosine of x (x is in radians).
Math.tan(x): returns the tangent of an angle x (x is in radians).
Math.log(x): returns the natural logarithm (base e) of x.
Math.log10(x): returns the common logarithm (base 10) of x.
Math.exp(x): returns the value of Ex.
*/

// Math Object
c = Math.PI;
c = Math.E;
c = Math.round(5.8);
c = Math.floor(5.58);
c = Math.ceil(5.58);
c = Math.sqrt(90);
c = Math.abs(-45);
c = Math.trunc(4.9); //Return Integer only
c = Math.pow(2, 4);
c = Math.min(10, 50, 5, 45, 8);
c = Math.max(10, 50, 5, 45, 8);
c = Math.random();
c = Math.floor(Math.random() * 50 + 1);
c = Math.sign(1); //Return Neg=-1 Zero=0 Pos=1
c = Math.sin(90);
c = Math.cos(90);
c = Math.log(1);
c = Math.log2(10);
c = Math.log10(10);

console.log(c);
