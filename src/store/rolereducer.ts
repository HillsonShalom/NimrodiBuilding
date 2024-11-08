import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import roleData from "../data/roles.json";
const roles = roleData as string[];

interface RoleState {
  value: string;
}

const initialState: RoleState = {
  value: "Unknown Personnel",
};

export const roleSlice = createSlice({
  name: "role",
  initialState,
  reducers: {
    setRole: (state, action: PayloadAction<number>) => {
      state.value = roles[action.payload];
    },
  },
});

export const { setRole } = roleSlice.actions;
export default roleSlice.reducer;
