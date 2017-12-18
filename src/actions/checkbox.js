import actionConstants from 'constants/action-types';
const { TOGGLE_CHECKBOX } = actionConstants;

export const toggleCheckbox = boolean => {
  return {
    type: TOGGLE_CHECKBOX,
    payload: boolean
  };
};
