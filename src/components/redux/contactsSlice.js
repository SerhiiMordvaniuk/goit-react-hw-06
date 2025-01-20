import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contactList: {},
};

const slice = createSlice({
  name: "contactList",
  initialState,
  reducers: {},
});

export const contactListReducer = slice.reducer;

export const selectContactList = (state) => state.contactList.contactList;
