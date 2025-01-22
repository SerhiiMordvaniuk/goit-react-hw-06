import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState,
  redusers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const contactsFilterReducer = filterSlice.reducer;
export const { changeFilter } = filterSlice.actions;
