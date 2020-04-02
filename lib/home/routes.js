import { METHODS } from 'rafter';

export default () => [
  {
    endpoint: `/`,
    controller: 'homeController',
    action: 'index',
    method: METHODS.get,
  },
];