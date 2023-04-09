import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/authOperation';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import Button from '@mui/material/Button';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.container}>
      <p>Welcome, {user.name}</p>
      <Button
        sx={{ backgroundColor: 'orange' }}
        variant="contained"
        type="button"
        onClick={() => {
          dispatch(logOut());
        }}
      >
        Log out
      </Button>
    </div>
  );
};
