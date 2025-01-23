import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contactList: [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
};

const contactSlice = createSlice({
  name: "contactList",
  initialState,
  reducers: {
    deleteContact: (state, action) => {
      state.contactList = state.contactList.filter(
        (contact) => contact.id !== action.payload
      );
    },
    addContact: (state, action) => {
      state.contactList.push(action.payload);
    },
  },
});

export const contactsListReducer = contactSlice.reducer;
export const { deleteContact, addContact } = contactSlice.actions;
