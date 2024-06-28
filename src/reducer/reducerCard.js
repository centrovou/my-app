export const INITIAL_STATE = { items: [] };

export const reducerCard = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return { ...state, items: [...state.items, action.payload] };
    default:
      return state;
  }
};
