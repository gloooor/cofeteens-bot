type State = {
  isOther: boolean;
  isSettling: boolean;
}

type SetState = {
  isOther?: boolean;
  isSettling?: boolean;
}

const defaultState = {
  isOther: false,
  isSettling: false
}

export const state = new Map<number, State>();
export const getState = (key: number) => ({ ...defaultState, ...state.get(key)});
export const setState = (key: number, value: SetState) => {
  const prevState = state.get(key);

  state.set(key, { 
    ...defaultState,
    ...prevState, 
    ...value
  });
};
export const deleteState = (key: number) => state.delete(key);
