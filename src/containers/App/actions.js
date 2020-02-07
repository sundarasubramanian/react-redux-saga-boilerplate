import { ActionTypes } from './constants';

export function getEmployeesDetails() {
  return {
    type: ActionTypes.GET_EMPLOYEES_DETAILS,
  };
}
