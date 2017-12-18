import actionConstants from 'constants/action-types';
const { APP_LOAD } = actionConstants;

const initialState = {
  loaded: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case APP_LOAD:
      return { ...state, loaded: true };
    default:
      return state;
  }
}
