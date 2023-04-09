import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOperation';
import css from './RegisterForm.module.css';
import Button from '@mui/material/Button';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div className={css.container}>
        <h1>Register</h1>
        <p>Please fill in this form to create an account.</p>
        <hr />
        <label>
          <b>Username</b>
          <input
            className={css.input}
            type="text"
            placeholder="Enter Your Name"
            name="name"
            required
          />
        </label>
        <label>
          <b>Email</b>
          <input
            className={css.input}
            type="email"
            placeholder="Enter Email"
            name="email"
            required
          />
        </label>
        <label>
          <b>Password</b>
          <input
            className={css.input}
            type="password"
            placeholder="Enter Password"
            name="password"
            required
          />
        </label>
        <hr />
        <Button variant="contained" className={css.registerbtn} type="submit">
          Register
        </Button>
      </div>
    </form>
  );
};
