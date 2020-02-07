import { fromJS, List } from 'immutable';
import { ActionTypes } from './constants';
import immutable from 'immutability-helper';

const userTypePlanState = fromJS({
employeesDetails:[],
});

function userTypePlanReducer(state = userTypePlanState, action) {
  switch (action.type) {
    case ActionTypes.EMPLOYEES_DETAILS: {
      return state
        .set('employeesDetails', action.payload.employeesDtails.data)
    }
       
    default:
      return state;
  }
}
export default userTypePlanReducer;
