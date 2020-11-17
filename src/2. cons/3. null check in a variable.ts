/** NULL CHECK IN A VARIABLE */

const a = "" as string | undefined;

const isNullable = a == null;

if (!isNullable) {
  a.toString();
}

export {};
