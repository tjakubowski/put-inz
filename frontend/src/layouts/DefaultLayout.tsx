import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from 'components/Button';
import Navbar from 'components/Navbar';
import { Paths } from 'types/router';
import { useAppSelector } from 'hooks';
import { ThemeContext } from 'styled-components';

const DefaultLayout: React.FC = ({ children }) => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const theme = useContext(ThemeContext);

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
