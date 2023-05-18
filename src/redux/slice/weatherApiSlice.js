import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTemperatureData = createAsyncThunk(
  "fetchTemperatureData",
  async ({ latitude, longitude }) => {
    const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m`;
    console.log("url", apiUrl);

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (response.ok) {
        return data;
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error("Error fetching temperature data:", error);
      throw error;
    }
  }
);

const initialState = {
  isLoading: false,
  data: null,
  isError: false,
};

const weatherApiSlice = createSlice({
  name: "weatherApi",
  initialState,
  reducers: {
    resetTemperature(state) {
      state.isLoading = false;
      state.data = null;
      state.isError = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTemperatureData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchTemperatureData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTemperatureData.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const { resetTemperature } = weatherApiSlice.actions;

export default weatherApiSlice.reducer;
