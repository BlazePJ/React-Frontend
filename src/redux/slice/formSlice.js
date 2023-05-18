import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  age: '',
  email: '',
  phoneNumber: '',
  state: '',
  temperature:''
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormValue(state, action) {
      const { field, value } = action.payload;
      state[field] = value;
      },
    resetForm(state) {
      return initialState;
    },
  },
});

export const { setFormValue, resetForm } = formSlice.actions;

export default formSlice.reducer;
