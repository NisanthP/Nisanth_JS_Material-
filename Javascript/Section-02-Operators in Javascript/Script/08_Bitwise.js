//Bitwise Operators in js

//&
let a = 12; //1100
let b = 24; //11000

console.log(a & b);

//&=
a &= b;
console.log(a);

// | (Bitwise or)
a = 12; //1100
b = 24; //11000
console.log(a | b);

//|=
a |= b;
console.log(a);

// ~    ~a = -a-1
a = 12; //-25-1=-26
console.log(~a);

// ^
a = 12;
b = 6;
console.log(a ^ b);

//<<
a = 5;
b = 2;
console.log(a << b);
a <<= b;
console.log(a);

//>>
a = 8;
b = 2;
console.log(a >> b);
a >>= b;
console.log(a);

// >>>
a = -11;
b = 2;

/*
0010
0011
----
0010

0000 1100    12
0001 1000    24
-----------------
0000 1000    8


0000 1100    12
0001 1000    24
-----------------
0001 1100    8
*/
