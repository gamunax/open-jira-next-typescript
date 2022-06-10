import { UIState } from './UIProvider';

export enum ActionType {
  UI_OPEN_SIDEBAR = 'UI - Open Sidebar',
  UI_CLOSE_SIDEBAR = 'UI - Close Sidebar',
}

type UIActionType = { type: ActionType.UI_OPEN_SIDEBAR } | { type: ActionType.UI_CLOSE_SIDEBAR };

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

    default:
      return { ...state };
  }
};
