/** GENERICS */

export const identity = <T>(id: T): T => id;

export let number = identity(1);

export let string = identity('str');

interface Lengthwise {
  length: number;
}

/** GENERIC CONSTRAINTS  */
function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

// @ts-expect-error no .length property
export let a = loggingIdentity(1);

export let b = loggingIdentity('str');
