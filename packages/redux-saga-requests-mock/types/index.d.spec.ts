import { createDriver } from './index';

const requestAction = {
  type: 'FETCH',
  request: { url: '/' },
  meta: { driver: 'default' },
};
const mockDriver = createDriver({});
createDriver(
  {},
  { getDataFromResponse: response => response.data, timeout: 1 },
);
mockDriver.getSuccessPayload({}, {});
mockDriver.getErrorPayload({});
mockDriver.sendRequest({}, {}, requestAction);
