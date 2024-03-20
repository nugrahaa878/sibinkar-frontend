interface InitialState {
  name: string;
}

interface SetName {
  type: "set_name";
  data: {
    name: string;
  };
}

// Add other action with |, example --> SetName | SetAddress | SetAge
type ActionType = SetName;

export type { ActionType, InitialState };
