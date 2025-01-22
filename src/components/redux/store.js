import { configureStore } from "@reduxjs/toolkit";
import { contactsListReducer } from "./contactsSlice";

export const store = configureStore({
  reducer: { contactList: contactsListReducer },
});
