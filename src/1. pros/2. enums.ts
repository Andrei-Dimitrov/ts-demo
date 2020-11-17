/** ENUMS */

/** NUMERIC ENUMS */
export enum Color {
  Black,
  White,
  Red ,
  Green,
  Blue,
}

export enum Flowers {
  /** declare start number */
  Rose = 5,
  Lily ,
  Tulip,
}

export const a = Flowers.Rose; // 5
/** reverse mapping */
const name = Flowers.Rose;
export const b = Flowers[name]; // 'Rose'

/** STRING ENUMS */
export enum ActionTypes {
  Fetch = 'feature/FETCH',
  Loading = 'feature/LOADING',
  Success = 'feature/SUCCESS',
  Fail = 'feature/FAIL',
}

export const c = ActionTypes.Success; // 'feature/SUCCESS'
// @ts-expect-error no reverse mapping for string enums
export const D = ActionTypes[ActionTypes.Success] // nope

const type = ActionTypes.Success as ActionTypes;

switch (type) {
  // case
}

if (type === ActionTypes.Loading) {
  console.log(type);
}
