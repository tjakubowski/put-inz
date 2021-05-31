import React from 'react';
import { Route, RouteProps, useHistory } from 'react-router-dom';
import { UserRole } from 'types/auth';
import { Paths } from 'types/router';
import { useAppSelector } from 'hooks';

export interface IGuardedRouteProps extends RouteProps {
  permittedRoles?: UserRole[];
  redirectPath?: Paths;
}

const GuardedRoute: React.VFC<IGuardedRouteProps> = ({
  permittedRoles = [],
  redirectPath = '/login',
  ...props
}) => {
  const role = useAppSelector(({ auth }) => auth.role);
  const history = useHistory();

  if (permittedRoles.length > 0 && !permittedRoles.includes(role)) {
    history.replace(redirectPath);
  }

  return <Route {...props} />;
};

export default GuardedRoute;
