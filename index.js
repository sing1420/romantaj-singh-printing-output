let a = 3;
let b = 5;
let c;

let output; 
// task description
output = 'let a = 3;\n';
output += 'let b = 5;\n';
output += 'let c;\n';
output += '---------\n';

// using operators
output += 'a + b = ' + (a + b) + '\n';
output += 'a - b = ' + (a - b) + '\n';
output += 'a * b = ' + (a * b) + '\n';
output += 'a / b = ' + (a / b) + '\n';
output += 'a % b = ' + (a % b) + '\n';
output += 'a += b = ' + (a += b) + '\n';
output += 'a -= b = ' + (a -= b) + '\n';
output += 'a *= b = ' + (a *= b) + '\n';
output += 'a /= b = ' + (a /= b) + '\n';
output += 'a %= b = ' + (a %= b) + '\n';
output += 'a == b = ' + (a == b) + '\n';
output += 'a != b = ' + (a != b) + '\n';
output += 'a > b = ' + (a > b) + '\n';
output += 'a < b = ' + (a < b) + '\n';
output += '!a && !c = ' + (!a && !c) + '\n';
output += '!a || !c = ' + (!a || !c) + '\n';





alert(output);

let firstName = 'Romantaj';
let lastName = 'Singh';
let email = 'sing1420@algonquinlive.com'
output = `My name is ${firstName} ${lastName}. you can contact me at ${email}.`;
console.log(output);