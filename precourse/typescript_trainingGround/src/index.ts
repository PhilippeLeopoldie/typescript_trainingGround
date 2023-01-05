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

class PersonC {
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
const p = new PersonC('Marcus',1972);

class EmployeeC extends PersonC {
  employeeId: number = -1;
}
/*const e = new EmployeeC('marcus employee', 1972);
console.log(e.getName());
console.log(e.employeeId);*/

interface Iperson {
  name: string,
  birthYear: number,
}
function getPersonNameString(person : Iperson ) : string {
  return `${person.name}, ${person.birthYear.toString()}`;
  
}



export {
  greet,
  isOld,
  countOdd,
  sumEven,
  Person,
  Address,
  getPersonStreetNo,
  PersonC,
  EmployeeC,
  Iperson,
  getPersonNameString
};
