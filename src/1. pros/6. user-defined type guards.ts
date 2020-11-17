/** USER DEFINED TYPE GUARD */

export const isObject = (arg: unknown): arg is object => typeof arg === 'object';

export const isString = (arg: unknown): arg is string => typeof arg === 'string';

export const a = (arg: unknown) => {
  if (isObject(arg)) {
    console.log(arg);
  }

  if (isString(arg)) {
    console.log(arg);
  }
}

/** ASSERTIONS */

export const assertObject: (arg: unknown) => asserts arg is object = (arg) => {
  if (typeof arg !== 'object') {
    throw new TypeError();
  }
}

export const assertString: (arg: unknown) => asserts arg is string = (arg) => {
  if (typeof arg !== 'string') {
    throw new TypeError();
  }
}

export const b = (arg: unknown) => {
  assertObject(arg);

  console.log(arg);
}

export const c = (arg: unknown) => {
  assertString(arg);

  console.log(arg);
}

export const assert: (arg: unknown) => asserts arg = (arg) => {
  if (!arg) {
    throw new TypeError();
  }
}

export const d = (arg: unknown) => {
  assert(typeof arg === 'number');

  console.log(arg);
}
