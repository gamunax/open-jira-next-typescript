import { FC, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Entry, EntryStatus } from '../../interfaces';
import { EntriesContext } from './EntriesContext';
import { EntriesReducer } from './EntriesReducer';

export interface EntriesState {
  entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description: 'Lorem ipsum dolor sit amet',
      status: EntryStatus.PENDING,
      createdAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
      status: EntryStatus.IN_PROGRESS,
      createdAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description: 'Commodi, quisquam, quidem.',
      status: EntryStatus.PENDING,
      createdAt: Date.now(),
    },
  ],
};

type Props = {
  children: React.ReactNode;
};

export const EntriesProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(EntriesReducer, Entries_INITIAL_STATE);
  return <EntriesContext.Provider value={{ ...state }}>{children}</EntriesContext.Provider>;
};
