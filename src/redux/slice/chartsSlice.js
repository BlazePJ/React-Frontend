import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPopulationData = createAsyncThunk(
  "fetchPopulationData",
  async () =>{ const response = await fetch ("https://raw.githubusercontent.com/vega/vega/main/docs/data/population.json")
  const data = await response.json()
  return data
});



const initialState = {
  isLoading: false,
  data: [],
  isError: false,
};

const chartsSlice = createSlice({
  name: "charts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPopulationData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchPopulationData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPopulationData.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});


export default chartsSlice.reducer;
