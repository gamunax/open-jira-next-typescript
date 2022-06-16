import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import { Box, Button, TextField } from '@mui/material';
import { ChangeEvent, useContext, useState } from 'react';
import { EntriesContext } from '../../context/entries';
import { UIContext } from '../../context/ui';

export const NewEntry = () => {
  const { addNewEntry } = useContext(EntriesContext);
  const { isAddEntry, setIsAddEntry } = useContext(UIContext);

  //const [isAdding, setIsAdding] = useState(false);

  const [inputValue, setInputValue] = useState('');
  const [touched, setTouched] = useState(false);

  const onTextFieldChanges = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onSave = () => {
    if (inputValue.length === 0) return;

    addNewEntry(inputValue);
    setIsAddEntry(false);
    setTouched(false);
    setInputValue('');
  };

  return (
    <Box sx={{ marginBottom: 2, paddingX: 1 }}>
      {isAddEntry ? (
        <>
          <TextField
            fullWidth
            sx={{ marginTop: 2, marginBottom: 1 }}
            placeholder="Nueva entrada"
            autoFocus
            multiline
            label="Nueva entrada"
            helperText={inputValue.length <= 0 && touched && 'Ingrese un valor'}
            error={inputValue.length <= 0 && touched}
            value={inputValue}
            onChange={onTextFieldChanges}
            onBlur={() => setTouched(true)}
          />

          <Box display="flex" justifyContent="space-between">
            <Button variant="text" onClick={() => setIsAddEntry(false)}>
              Cancelar
            </Button>
            <Button variant="outlined" color="secondary" endIcon={<SaveOutlinedIcon />} onClick={onSave}>
              Guardar
            </Button>
          </Box>
        </>
      ) : (
        <Button startIcon={<AddCircleOutlineOutlinedIcon />} fullWidth variant="outlined" onClick={() => setIsAddEntry(true)}>
          Agregar tarea
        </Button>
      )}
    </Box>
  );
};
