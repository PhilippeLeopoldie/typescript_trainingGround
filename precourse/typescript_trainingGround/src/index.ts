//import { arrayBuffer } from "stream/consumers";

import { getSystemErrorName } from "util";

const greet = (name : string, birthYear: number)  => {
  const age = new Date().getFullYear() - birthYear;
  return `Hello ${name}, you are ${age} years old`;
}
const isOld = (age : number) =>  age > 34 ;

const countOdd = (array : number[]) =>  array.filter(x => x % 2 !== 0).length;


const sumEven = (arr : number[]) : number => {
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
const getPersonStreetNo = (p : Person) => p.address.streetNo;

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

interface IPerson {
  name: string,
  birthYear: number,
}
const getPersonNameString = (person : IPerson ) =>`${person.name}, ${person.birthYear.toString()}`; 

const printThis = (p : Person | undefined |null) => {
  if(!p){return 'no person supplied'};
  return p.name;
}

const optionallyAdd = (num1 : number, num2 : number, num3:number=0, num4:number=0, num5:number=0)=> {
  let sum = num1 + num2;
  if(num3){sum += num3;}
  if(num4){sum += num4;}
  /*sum += num5 ? num5 : 0;*/
  num5? sum+=num5:0;
  return sum;
}
export const greetPeople = (greeting : string, ...names :string []) => {
  return `${greeting} ${names.join(' and ')}`.trim();
}

const addToStart = <T> (list : T [], itemToAdd: T) : T[] => {
  return [itemToAdd, ...list];
};
class Wrapper<T> {
  private list: T[];

  constructor(list : T[]) {
    this.list = list;
  }

  public getFirst() : T {
    return this.list[0];
  }
  public getLast() : T {
    return this.list[this.list.length-1];
  }
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
  IPerson,
  getPersonNameString,
  printThis,
  optionallyAdd,
  addToStart,
  Wrapper,
};
