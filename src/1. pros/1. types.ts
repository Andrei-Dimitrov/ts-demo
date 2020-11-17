/** TYPES */

/** PRIMITIVE TYPES */
let number = 1;
let string = 'Hello!';
let boolean = true;
let bigInt = 1n;
let symbol = Symbol("1");
let nullVar = null;
let undefinedVar = undefined;

/** INTERFACES */
export interface A extends B, C {
  /** regular field */
  field1: string,
  field2: {
    nested: boolean,
  },
  field3: (x: number) => number,
  /** index signature */
  [x: string]: any,
  /** call signature */
  (x: number): number,
  (x: string): boolean,
}

export interface B {
  fieldB: number,
}

export interface C {
  fieldC: string,
}

/** TYPE ALIASES */
export type aliasA = A;

export type T = Record<string, aliasA>;
export type Y = Partial<T>;
export type P = Omit<T, 'field1'>;
export type E = Pick<P, 'fieldB'>;
export type S = Exclude<P, 'fieldC'>;

export {
  number,
  string,
  boolean,
  bigInt,
  symbol,
  nullVar,
  undefinedVar,
};
