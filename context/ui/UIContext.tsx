import { createContext } from 'react';

type ContextProps = {
  sidemenuOpen: boolean;
  openSideMenu: () => void;
  closeSideMenu: () => void;
  isAddEntry: boolean;
  setIsAddEntry: (isAddEntry: boolean) => void;
};

export const UIContext = createContext({} as ContextProps);
