import actionConstants from 'constants/action-types';
const { TOGGLE_CHECKBOX } = actionConstants;

const initialState = {
  checked: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_CHECKBOX:
      return { ...state, checked: action.payload };
    default:
      return state;
  }
}
