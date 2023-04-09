import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/contactOperation';
import css from '../ContactForm/ContactForm.module.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export function ContactForm() {
  const dispatch = useDispatch();
  const userName = useSelector(getContacts).map(contact => contact.name);

  const handleSubmit = e => {
    e.preventDefault();

    const { name, number } = e.target;

    if (userName.includes(name.value)) {
      alert(`${name.value} is already in your contact`);
      return;
    }

    dispatch(
      addContact({
        name: name.value,
        number: number.value,
      })
    );

    e.target.reset();
  };

  return (
    <form className={css.container} onSubmit={handleSubmit}>
      <div className={css.form}>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <TextField
          id="outlined-basic"
          label="Number"
          variant="outlined"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <Button type="submit" variant="contained" disableElevation>
          Add contact
        </Button>
      </div>
    </form>
  );
}
