import { createSelector } from 'reselect';

const planState = state => state.get('employees');

export const selectEmployeesDetails = () =>
  createSelector(planState, bstate => bstate.get('employeesDetails'));
