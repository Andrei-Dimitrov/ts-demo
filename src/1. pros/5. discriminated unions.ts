/** DISCRIMINATED UNIONS */

interface NetworkLoadingState {
  state: 'loading',
}

interface NetworkFailedState {
  state: 'failed',
  code: number,
}

interface NetworkSuccessState {
  state: 'success',
  response: {
    title: string,
    duration: number,
    summary: string,
  },
}

// Create a type which represents only one of the above types
// but you aren't sure which it is yet.
export type NetworkState =
  | NetworkLoadingState
  | NetworkFailedState
  | NetworkSuccessState;


export const action = {
  state: 'loading'
} as NetworkState;

export const a = () => {
  switch (action.state) {
    case "failed":
      return action.code;
    case "loading":
      return action.state;
    case "success":
      return action.response;
  }
}
