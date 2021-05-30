import { getEnvironmentVariable } from './utils/env';

const config = {
  api: {
    hostname: getEnvironmentVariable('API_HOSTNAME'),
    port: getEnvironmentVariable('API_PORT'),
  },
};

export default config;
