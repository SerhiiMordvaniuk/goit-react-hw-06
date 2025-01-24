import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
    },
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
  },
});

export const contactsListReducer = contactSlice.reducer;
export const { deleteContact, addContact } = contactSlice.actions;
