import { configureStore } from "@reduxjs/toolkit";
import { contactListReducer } from "./reducer";

export const store = configureStore({
  reducer: { contactList: contactListReducer },
});
