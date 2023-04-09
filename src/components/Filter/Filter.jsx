import React from 'react';
import { useDispatch } from 'react-redux';
import { SearchByName } from 'redux/contacts/contactsReducer';
import TextField from '@mui/material/TextField';
import css from '../Filter/Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  const filterOnChange = event => {
    dispatch(SearchByName(event.currentTarget.value));
  };

  return (
    <div className={css.container}>
      <TextField
        id="outlined-search"
        label="Search field"
        type="search"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={filterOnChange}
      />
    </div>
  );
};
