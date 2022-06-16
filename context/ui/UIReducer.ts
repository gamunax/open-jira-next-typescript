import { UIState } from './UIProvider';

export enum ActionType {
  UI_OPEN_SIDEBAR = 'UI - Open Sidebar',
  UI_CLOSE_SIDEBAR = 'UI - Close Sidebar',
  IS_ADD_ENTRY = 'IS ADD ENTRY',
}

type UIActionType =
  | { type: ActionType.UI_OPEN_SIDEBAR }
  | { type: ActionType.UI_CLOSE_SIDEBAR }
  | { type: ActionType.IS_ADD_ENTRY; payload: any };

export const UIReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case ActionType.UI_OPEN_SIDEBAR:
      return {
        ...state,
        sidemenuOpen: true,
      };

    case ActionType.UI_CLOSE_SIDEBAR:
      return {
        ...state,
        sidemenuOpen: false,
      };

    case ActionType.IS_ADD_ENTRY:
      return {
        ...state,
        isAddEntry: action.payload,
      };

    default:
      return { ...state };
  }
};
