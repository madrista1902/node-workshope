const passwordGenerator = require('password-generator');
const password = passwordGenerator({
  length: 10,
  numbers: true,
  uppercase: true,
  symbols: true,
});
 

console.log(password);
