import { EntriesState } from './EntriesProvider';

export enum ActionType {
  ADD_ENTRY = 'ADD_ENTRY',
}

type EntriesActionType = { type: ActionType.ADD_ENTRY };

export const EntriesReducer = (state: EntriesState, action: EntriesActionType): EntriesState => {
  switch (action.type) {
    case ActionType.ADD_ENTRY:
      return {
        ...state,
      };

    default:
      return { ...state };
  }
};
