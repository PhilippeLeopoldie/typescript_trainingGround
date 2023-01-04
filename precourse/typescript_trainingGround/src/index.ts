//import { arrayBuffer } from "stream/consumers";

import { getSystemErrorName } from "util";

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
type Address = {
  street: string,
  streetNo : number,
  city : string,
};
type Person = {
  name: string,
  birthYear : number,
  address : Address,
};
function getPersonStreetNo (p : Person) : number {
  return p.address.streetNo;
}

class PersonClass {
  private name : string ='';
  birthYear: number = 0;

  constructor(name : string, birthYear : number) {
    this.name = name;
    this.birthYear = birthYear; 
  }
  getName() {
    return this.name;
  }
}



const p = new PersonClass('Marcus',1972);


export {
  greet,
  isOld,
  countOdd,
  sumEven,
  Person,
  Address,
  getPersonStreetNo,
};
