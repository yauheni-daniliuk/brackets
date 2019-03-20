module.exports = function check(str, bracketsConfig) {
  // your solution 
  let a = bracketsConfig.length;
  let b = str.length;
  let stack = [];

  for (let k = 0; k < b; k++) {
    stack.push(str[k]);
    for (let i = 0; i < a; i++) {
      if (bracketsConfig[i][1] == stack[stack.length - 1] 
        && bracketsConfig[i][0] == stack[stack.length - 2]) {
          stack.splice(stack.length - 2, 2);
      }
    }
  }

  let result = (stack.length == 0);
  return result;
}
