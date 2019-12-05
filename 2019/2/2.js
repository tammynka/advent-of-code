/*

  https://adventofcode.com/2019/day/2

*/

const input = [1,12,2,3,1,1,2,3,1,3,4,3,1,5,0,3,2,10,1,19,1,19,6,23,2,13,23,27,1,27,13,31,1,9,31,35,1,35,9,39,1,39,5,43,2,6,43,47,1,47,6,51,2,51,9,55,2,55,13,59,1,59,6,63,1,10,63,67,2,67,9,71,2,6,71,75,1,75,5,79,2,79,10,83,1,5,83,87,2,9,87,91,1,5,91,95,2,13,95,99,1,99,10,103,1,103,2,107,1,107,6,0,99,2,14,0,0];

const ADD = 1;
const MULTIPLY = 2;
const BREAK = 99;
const DESIRED_OUTPUT = 19690720;

getOutput = (arr) => {
  let pointer = 0;
  let opcode = arr[pointer];
  while(opcode !== BREAK) {
    let val1 = arr[arr[pointer + 1]];
    let val2 = arr[arr[pointer + 2]];
    let res;
    if (opcode === ADD) {
      res = val1 + val2;
    } else if (opcode === MULTIPLY) {
      res = val1 * val2
    }
    arr[arr[pointer + 3]] = res;
    pointer += 4;
    opcode = arr[pointer];
  }
  return arr;
};

getUpdatedInput = (i, j) => {
  const updatedInput = [...input];
  updatedInput[1] = i;
  updatedInput[2] = j;
  return updatedInput;
}

let i;
let j;
let output;
let total = 0;
loop: for (i = 0; i < 99; i++) {
  for (j = 0; j < 99; j++) {
    output = getOutput(getUpdatedInput(i, j));
    if (output[0] === DESIRED_OUTPUT) {
      break loop;
    }
  }
}

padNum = (n) => {
  return (n < 10 ? 0 : '') + n;
};

console.log(`noun: ${i}, verb: ${j}, solution: ${padNum(i)}${padNum(j)}`);
