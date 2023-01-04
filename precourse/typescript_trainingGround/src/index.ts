import { arrayBuffer } from "stream/consumers";

function greet(name : string, birthYear: number) : string {
  const age = new Date().getFullYear() - birthYear;
  return `Hello ${name}, you are ${age} years old`;
}
function isOld(age : number) : boolean {
  return age > 34 ;
}
function countOdd(array : number[]) : number {
  return array.filter(x => x % 2 !== 0).length;
}

function sumEven(arr : number[]) : number {
  return arr.filter(even => even % 2 === 0)
  .reduce((a,b) => a + b,0);
}
export {
  greet, isOld,countOdd, sumEven
};
