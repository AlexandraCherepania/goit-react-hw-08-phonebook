import css from '../ContactList/ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchContacts,
  deleteContact,
} from '../../redux/contacts/contactOperation';
import { useEffect } from 'react';
import {
  getContacts,
  getFilter,
  getIsLoading,
  getError,
} from '../../redux/contacts/selectors';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const filter = useSelector(getFilter);
  const error = useSelector(getError);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      {isLoading && <p>Loading contacts....</p>}
      {error && <p>{error}</p>}
      {contacts.length > 0 && (
        <ul className={css.list}>
          {visibleContacts.map(contact => {
            return (
              <li className={css.item} key={contact.id}>
                <span>
                  {contact.name} : {contact.number}
                </span>
                <Button
                  variant="outlined"
                  startIcon={<DeleteIcon />}
                  // className={css.item__button}
                  onClick={() => dispatch(deleteContact(contact.id))}
                  disabled={isLoading}
                >
                  Видалити
                </Button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
