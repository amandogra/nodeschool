var arg1 = process.argv[2];
var arg2 = process.argv[3];

import MathD from './MathD';
console.log(MathD.PI);
console.log(MathD.sqrt(+arg1));
console.log(MathD.square(+arg2));
