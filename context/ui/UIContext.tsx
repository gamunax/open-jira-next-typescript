import { createContext } from 'react';

type ContextProps = {
  sidemenuOpen: boolean;
};

export const UIContext = createContext({} as ContextProps);
