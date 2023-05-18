import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
};

const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    addContact(state, action) {
      const newContact = action.payload;
      state.contacts.push(newContact);
    },
  },
});

export const { addContact, removeContact } = tableSlice.actions;
export default tableSlice.reducer;
