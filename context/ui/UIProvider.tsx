import { FC, useReducer } from 'react';
import { UIContext } from './UIContext';
import { ActionType, UIReducer } from './UIReducer';

export interface UIState {
  sidemenuOpen: boolean;
  isAddEntry: boolean;
}

const UI_INITIAL_STATE: UIState = {
  sidemenuOpen: false,
  isAddEntry: false,
};

type Props = {
  children: React.ReactNode;
};

export const UIProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(UIReducer, UI_INITIAL_STATE);

  const openSideMenu = () => {
    dispatch({ type: ActionType.UI_OPEN_SIDEBAR });
  };

  const closeSideMenu = () => {
    dispatch({ type: ActionType.UI_CLOSE_SIDEBAR });
  };

  const setIsAddEntry = (isAddEntry: boolean) => {
    dispatch({ type: ActionType.IS_ADD_ENTRY, payload: isAddEntry });
  };

  return <UIContext.Provider value={{ ...state, openSideMenu, closeSideMenu, setIsAddEntry }}>{children}</UIContext.Provider>;
};
