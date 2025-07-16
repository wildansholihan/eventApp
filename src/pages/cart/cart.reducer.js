const initialState = {
  cartItems: [],
  selectedIds: [],
  showDeleteModal: false,
  showSuccessModal: false,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const exists = state.cartItems.find(item => item.id === action.payload.id);
      if (exists) {
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }]
        };
      }
    }

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload),
      };

    case 'UPDATE_QUANTITY':
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: Math.max(1, action.payload.quantity) }
            : item
        )
      };

    case 'CLEAR_CART':
      return { ...state, cartItems: [] };

    case 'SET_SELECTED_IDS':
      return { ...state, selectedIds: action.payload };

    case 'TOGGLE_SELECTED_ID':
      const id = action.payload;
      const isSelected = state.selectedIds.includes(id);
      return {
        ...state,
        selectedIds: isSelected
          ? state.selectedIds.filter(itemId => itemId !== id)
          : [...state.selectedIds, id],
      };

    case 'CLEAR_SELECTED_IDS':
      return { ...state, selectedIds: [] };

    case 'SET_SHOW_DELETE_MODAL':
      return { ...state, showDeleteModal: action.payload };

    case 'SET_SHOW_SUCCESS_MODAL':
      return { ...state, showSuccessModal: action.payload };

    default:
      return state;
  }
};

export default cartReducer;
