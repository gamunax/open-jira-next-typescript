import { Entry } from '../../interfaces';
import { EntriesState } from './EntriesProvider';

export enum ActionType {
  ADD_ENTRY = '[Entry] ADD_ENTRY',
  ENTRY_UPDATED = '[Entry] UPDATE ENTRY',
}

type EntriesActionType = { type: ActionType.ADD_ENTRY; payload: Entry } | { type: ActionType.ENTRY_UPDATED; payload: Entry };

export const EntriesReducer = (state: EntriesState, action: EntriesActionType): EntriesState => {
  switch (action.type) {
    case ActionType.ADD_ENTRY:
      return {
        ...state,
        entries: [...state.entries, action.payload],
      };

    case ActionType.ENTRY_UPDATED:
      return {
        ...state,
        entries: state.entries.map((entry) => {
          if (entry._id === action.payload._id) {
            entry.status = action.payload.status;
            entry.description = action.payload.description;
          }
          return entry;
        }),
      };

    default:
      return { ...state };
  }
};
