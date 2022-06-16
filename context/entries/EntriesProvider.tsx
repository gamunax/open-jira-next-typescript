import { FC, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Entry, EntryStatus } from '../../interfaces';
import { EntriesContext } from './EntriesContext';
import { ActionType, EntriesReducer } from './EntriesReducer';

export interface EntriesState {
  entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description: 'Pendiente: Lorem ipsum dolor sit amet',
      status: EntryStatus.PENDING,
      createdAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description: 'En progreso: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
      status: EntryStatus.IN_PROGRESS,
      createdAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description: 'Terminada: Commodi, quisquam, quidem.',
      status: EntryStatus.FINISHED,
      createdAt: Date.now(),
    },
  ],
};

type Props = {
  children: React.ReactNode;
};

export const EntriesProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(EntriesReducer, Entries_INITIAL_STATE);

  const addNewEntry = (description: string) => {
    const newEntry: Entry = {
      _id: uuidv4(),
      description,
      createdAt: Date.now(),
      status: EntryStatus.PENDING,
    };

    dispatch({ type: ActionType.ADD_ENTRY, payload: newEntry });
  };

  const updateEntry = (entry: Entry) => {
    dispatch({ type: ActionType.ENTRY_UPDATED, payload: entry });
  };

  return <EntriesContext.Provider value={{ ...state, addNewEntry, updateEntry }}>{children}</EntriesContext.Provider>;
};
