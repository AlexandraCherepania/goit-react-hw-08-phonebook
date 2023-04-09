import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from '../redux/contactReducer';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});