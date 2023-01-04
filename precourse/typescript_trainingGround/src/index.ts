function greet(name : string, birthYear: number) : string {
  const age = new Date().getFullYear() - birthYear;
  return `Hello ${name}, you are ${age} years old`;
}
function isOld(age : number) : boolean {
  return age > 34 ;
}

export {
  greet, isOld,
};
