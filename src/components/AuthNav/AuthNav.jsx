import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div className={css.nav}>
      <NavLink className={css.text} to="/register">
        Register
      </NavLink>
      <NavLink className={css.text} to="/login">
        Log In
      </NavLink>
    </div>
  );
};
