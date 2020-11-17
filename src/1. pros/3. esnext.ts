/** ESNEXT */

const a = {
  b: {
    c: true,
  }
};

/** OPTIONAL CHAINING AND NULLISH COALESCING */
export const b = a?.b?.c ?? false;

/** PROMISE ALL SETTLED */
Promise.allSettled([]);

/** TOP LEVEL AWAIT */
await Promise.resolve();

let c = true;
/** LOGICAL ASSIGNMENT OPERATORS */
c &&= false;
c ||= true;

/** AND SO ON! */
