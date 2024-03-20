import { ActionType, InitialState } from "../types";

const initialState: InitialState = {
  name: "ari",
};

const reducer = (state: InitialState, action: ActionType): InitialState => {
  switch (action.type) {
    case "set_name": {
      return {
        ...state,
        name: action.data.name,
      };
    }
    default:
      return state;
  }
};

export { reducer, initialState };
