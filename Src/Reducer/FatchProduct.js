import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const fetchProduct = createAsyncThunk('fetchProduct', async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts'); // Fixed typo: 'fatch' -> 'fetch'
  const result = await res.json();
  return result;
});

const productSlice = createSlice({
  name: 'product',
  initialState: {
    data: [],
    loader: false,
    isError: false,
  },
  extraReducers: builder => {
    builder.addCase(fetchProduct.pending, state => {
      state.loader = true;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.loader = false;
      state.data = action.payload; // Update the state with serialized data
    });
    builder.addCase(fetchProduct.rejected, state => {
      state.loader = false;
      state.isError = true;
    });
  },
});

export default productSlice.reducer;
