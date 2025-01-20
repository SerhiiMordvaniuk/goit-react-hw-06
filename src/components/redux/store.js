import { configureStore } from "@reduxjs/toolkit";
import { contactListReducer } from "./contactsSlice";

export const store = configureStore({
  reducer: { contactList: contactListReducer },
});
