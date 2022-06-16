import { UIState } from './UIProvider';

export enum ActionType {
  UI_OPEN_SIDEBAR = 'UI - Open Sidebar',
  UI_CLOSE_SIDEBAR = 'UI - Close Sidebar',
  IS_ADD_ENTRY = 'IS ADD ENTRY',
  START_DRAGGING = 'START DRAGGIN',
  END_DRAGGING = 'END DRAGGIN',
}

type UIActionType =
  | { type: ActionType.UI_OPEN_SIDEBAR }
  | { type: ActionType.UI_CLOSE_SIDEBAR }
  | { type: ActionType.IS_ADD_ENTRY; payload: boolean }
  | { type: ActionType.START_DRAGGING }
  | { type: ActionType.END_DRAGGING };

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

    case ActionType.START_DRAGGING:
      return {
        ...state,
        isDragging: true,
      };

    case ActionType.END_DRAGGING:
      return {
        ...state,
        isDragging: false,
      };

    default:
      return { ...state };
  }
};
