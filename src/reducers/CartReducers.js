const initialState = { cartData: [] };
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { cartData: [...state.cartData, action.payLoad] };
      // eslint-disable-next-line no-unreachable
      break;

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartData: state.cartData.filter(
          (item) => item.id !== action.payload.id,
        ),
      };
      // eslint-disable-next-line no-unreachable
      break;
    default:
      return state;
  }
};
export { cartReducer, initialState };
