import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface CartItem {
  id: number;
  image: string;
  name: string;
  quantity: number;
  price: number;
}

interface CartState {
  cart: CartItem[];
}

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const itemPresent = state.cart.find(
        item => item.id === action.payload.id,
      );
      if (itemPresent) {
        itemPresent.quantity++;
      } else {
        state.cart.push({...action.payload, quantity: 1});
      }
    },

    removeFromCart: (state, action) => {
      const removeItem = state.cart.filter(
        item => item.id !== action.payload.id,
      );
      state.cart = removeItem;
    },

    incrementQunatity: (state, action) => {
      const itemPresrnt = state.cart.find(
        item => item.id === action.payload.id,
      );
      if (itemPresrnt) itemPresrnt.quantity++;
    },
    decrementQuantity: (state, action: PayloadAction<CartItem>) => {
      const itemPresent = state.cart.find(
        item => item.id === action.payload.id,
      );
      if (itemPresent && itemPresent.quantity === 1) {
        const removeItem = state.cart.filter(
          item => item.id !== action.payload.id,
        );
        state.cart = removeItem;
      } else if (itemPresent && itemPresent.quantity > 0) {
        if (itemPresent) itemPresent.quantity--;
      }
    },
  },
});

export const {addToCart, removeFromCart, incrementQunatity, decrementQuantity} =
  cartSlice.actions;
export default cartSlice.reducer;
