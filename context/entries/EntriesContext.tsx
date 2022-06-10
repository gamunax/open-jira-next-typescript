import { createContext } from 'react';
import { Entry } from '../../interfaces';

type ContextProps = {
  entries: Entry[]; // TODO: define type
};

export const EntriesContext = createContext({} as ContextProps);
