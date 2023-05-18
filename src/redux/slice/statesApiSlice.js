import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchStates = createAsyncThunk('fetchStates', async () => {
  const response = await fetch(
    'https://gist.githubusercontent.com/dastagirkhan/00a6f6e32425e0944241/raw/33ca4e2b19695b2b93f490848314268ed5519894/gistfile1.json'  );
  const data = await response.json();
  return data;
});

const statesApiSlice = createSlice({
  name: 'statesApi',
  initialState: {
    isLoading: false,
    data: null,
    isError: false
  },
  extraReducers: (builder) => {
    builder.addCase(fetchStates.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchStates.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchStates.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });
  }
});

export default statesApiSlice.reducer;
