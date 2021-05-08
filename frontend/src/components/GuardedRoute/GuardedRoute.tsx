import React from 'react';
import { Route, RouteProps, useHistory } from 'react-router-dom';
import { UserRole } from '../../utils/auth';
import { RouterPaths } from '../../router/paths';
import { useAppSelector } from '../../hooks';

export interface IGuardedRouteProps extends RouteProps {
  permittedRoles: UserRole[];
  redirectPath?: RouterPaths;
}

const GuardedRoute: React.VFC<IGuardedRouteProps> = ({
  permittedRoles,
  redirectPath = '/login',
  ...props
}) => {
  const role = useAppSelector((state) => state.auth.role);
  const history = useHistory();

  if (!role || !permittedRoles.includes(role)) {
    history.replace(redirectPath);
  }

  return <Route {...props} />;
};

GuardedRoute.defaultProps = {};

export default GuardedRoute;
