import { Paths } from 'types/router';

export const generatePath = (path: Paths, params: { [key: string]: string | number }): string => {
  return Object.keys(params).reduce((path, key) => path.replace(`:${key}`, `${params[key]}`), path);
};
