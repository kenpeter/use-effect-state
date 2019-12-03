export const INITIAL_STATE = {
  loading: true,
  items: []
};

const itemsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ITEMS_GET': {
      //console.log('ITEMS_GET', action);
      return {...state, loading: true};
    }

    case 'ITEMS_GET_SUCCESS': {
      //console.log('ITEMS_GET_SUCCESS', action);
      return {...state, items: action.items, loading: false};
    }

    case 'ITEMS_GET_FAIL': {
      //console.log('ITEMS_GET_FAIL', action);
      return {...state, loading: false};
    }

    default:
      return state;
  }
};

export default itemsReducer;
