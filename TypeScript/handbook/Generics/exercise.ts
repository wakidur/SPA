function identity(arg: number): number {
  return arg;
}

function identityAny(arg: any): any {
  return arg;
}

function identityType<T>(arg: T): T {
  return arg;
}

/**
 * 06-11-2018 -----------------
 */

function identitySpecificType(arg: number): number {
  return arg;
}

function identityAnyType(arg: any): any {
  return arg;
}

function identityTypeVariable<T>(arg: T): T {
  return arg;
}

// Once we’ve written the generic identity function, we can call it in one of two ways.
let outputFirst = identityTypeVariable<string>("myString"); // type of output will be 'string'

// The second way is also perhaps the most common. Here we use type argument inference – that is, we want the compiler to set the value of T for us automatically based on the type of the argument we pass in
let outputSecond = identityTypeVariable("myString"); // type of output will be 'string'

function identityTypeOne<T>(arg: T): T {
  return arg;
}

function loggingIdentity<T>(arg: T): T {
  console.log(arg.length); // Error: T doesn't have .length
  return arg;
}

function loggingIdentitysecond<T>(arg: T[]): T[] {
  console.log(arg.length); // Error: T doesn't have .length
  return arg;
}

function loggingIdentityThird<T>(arg: Array<T>): Array<T> {
  console.log(arg.length); // Error: T doesn't have .length
  return arg;
}

// Generic Types

function identityGenericType<T>(agr: T): T {
  return agr;
}

let myIdentityGenericType: <T>(agr: T) => T = identityGenericType;

function identityDifferntname<T>(arg: T): T {
  return arg;
}
let myIdentityDifferentName: <U>(arg: U) => U = identityDifferntname;

// signature of an object literal type

function signatureObjectLiteral<T>(arg: T): T {
  return arg;
}

let signatureOfObjectLiteral: { <T>(arg: T): T } = signatureObjectLiteral;

// generic interface

interface GenericIdentityFn {
  <T>(arg: T): T;
}

function identityGenericInterface<T>(arg: T): T {
  return arg;
}

let myIdentityGenericInterface: GenericIdentityFn = identityGenericInterface;

interface GenericIdentityFnFirst<T> {
  (arg: T): T;
}

function identityGenericInterfaceFirst<T>(arg: T): T {
  return arg;
}

let myIdentityGenericInterfaceFirst: GenericIdentityFnFirst<
  number
> = identityGenericInterfaceFirst;

/**
 * Generic Classes
 */

class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) {
  return x + y;
};

let stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = "";
stringNumeric.add = function(x, y) {
  return x + y;
};

console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));

/**
 * Generic Constraints
 */

