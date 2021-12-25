import { Autocomplete, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import React from 'react';
import { Option } from './Catfood';

const getOptionLabel = (option: Option) => option.label || option.value;
const groupBy = (option: Option) => option.store;
const sx = { width: '24rem', margin: '0', padding: '0' };

interface Props {
  options: Option[],
  value: Option,
  onPlaceSelect: (address: string, store: string) => void
};

const StoreSelect: React.FC<Props> = ({ options, onPlaceSelect, ...props }) => {
  const [dialogOpen, toggleDialogOpen] = React.useState(false);
  const [dialogValue, setDialogValue] = React.useState({
    value: '',
    store: ''
  }); 

  const selectOptions = React.useMemo(() => {
    return [...options, { value: 'Add New Location', store: '' }];
  }, [options]);

  const handleCloseDialog = () => {
    setDialogValue({ value: '', store: '' });
    toggleDialogOpen(false);
  };

  const handleSubmitDialog = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onPlaceSelect(dialogValue.value, dialogValue.store);
    handleCloseDialog();
  };

  return (<>
    <Autocomplete
      value={props.value}
      onChange={(_, newValue) => {
        console.log(newValue);
        if (typeof newValue === 'object') {
          if (newValue?.value === 'Add New Location') {
            toggleDialogOpen(true);
          } else {
            onPlaceSelect(newValue?.value as string, newValue?.store as string);
          }
        }
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      freeSolo
      options={selectOptions}
      getOptionLabel={getOptionLabel}
      groupBy={groupBy}
      renderInput={
        params => <TextField {...params} label="Store" variant="outlined" sx={sx} />
      }
      sx={sx}
    />
    <Dialog
      open={dialogOpen}
      onClose={handleCloseDialog}
    >
      <form onSubmit={handleSubmitDialog}>
        <DialogTitle>Add a Place</DialogTitle>
        <DialogContent>
          <DialogContentText>Observed something from a new store? Please add it!</DialogContentText>
          <TextField 
            autoFocus
            value={dialogValue.store}
            onChange={e => setDialogValue({ ...dialogValue, store: e.target.value })}
            label="Store"
            type="text"
          />
          <TextField 
            value={dialogValue.value}
            onChange={e => setDialogValue({ ...dialogValue, value: e.target.value })}
            label="Address"
            type="text"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button type="submit">Add Store</Button>
        </DialogActions>
      </form>
    </Dialog>
  </>);
};

export default StoreSelect;
