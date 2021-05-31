import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from 'components/Button';
import Navbar from 'components/Navbar';
import { Paths } from 'types/router';
import { useAppDispatch, useAppSelector } from 'hooks';
import { ThemeContext } from 'styled-components';
import { logout } from 'store/auth/actions';

const DefaultLayout: React.FC = ({ children }) => {
  const isAuthenticated = useAppSelector(({ auth }) => auth.isAuthenticated);
  const theme = useContext(ThemeContext);
  const dispatch = useAppDispatch();
  const history = useHistory();

  const handleLogout = async () => {
    await dispatch(logout());
    history.replace(Paths.Homepage);
  };

  return (
    <>
      <Navbar>
        {isAuthenticated ? (
          <>
            <Link to={Paths.Doctors}>
              <Button color={theme.colors.primary}>Lekarze</Button>
            </Link>
            <Link to={Paths.Patients}>
              <Button color={theme.colors.primary}>Pacjenci</Button>
            </Link>
            <Button color={theme.colors.error} text onClick={handleLogout}>
              Wyloguj
            </Button>
          </>
        ) : (
          <>
            <Link to={Paths.Doctors}>
              <Button color={theme.colors.primary}>Logowanie</Button>
            </Link>
          </>
        )}
      </Navbar>
      {children}
    </>
  );
};

export default DefaultLayout;
