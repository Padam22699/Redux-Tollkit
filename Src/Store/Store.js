import {configureStore} from '@reduxjs/toolkit';
import productSliceReducer from '../../Src/Reducer/FatchProduct'; // Adjust the import path as needed

export const store = configureStore({
  reducer: {
    product: productSliceReducer, // Use the imported reducer
  },
});
