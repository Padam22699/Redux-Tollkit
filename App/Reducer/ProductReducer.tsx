import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface Product {
  id: number;
  image: string;
  name: string;
  quantity: number;
  price: number;
}
interface ProductState {
  product: Product[];
}
const initialState: ProductState = {
  product: [],
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getProducts: (state, action: PayloadAction<Product>) => {
      state.product.push({...action.payload});
    },
    incrementQty: (state, action: PayloadAction<Product>) => {
      const itemPresrnt = state.product.find(
        item => item.id === action.payload.id,
      );
      if (itemPresrnt) itemPresrnt.quantity++;
    },
    decrementQty: (state, action: PayloadAction<Product>) => {
      const itemPresent = state.product.find(
        item => item.id === action.payload.id,
      );
      if (itemPresent && itemPresent.quantity === 1) {
        const removeItem = state.product.filter(
          item => item.id !== action.payload.id,
        );
        state.product = removeItem;
      } else if (itemPresent && itemPresent.quantity > 0) {
        if (itemPresent) itemPresent.quantity--;
      }
    },
  },
});

export const {getProducts, incrementQty, decrementQty} = productSlice.actions;
export default productSlice.reducer;
