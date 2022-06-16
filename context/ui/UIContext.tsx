import { createContext } from 'react';

type ContextProps = {
  sidemenuOpen: boolean;
  isAddEntry: boolean;
  isDragging: boolean;

  openSideMenu: () => void;
  closeSideMenu: () => void;
  setIsAddEntry: (isAddEntry: boolean) => void;
  startDragging: () => void;
  endDragging: () => void;
};

export const UIContext = createContext({} as ContextProps);
