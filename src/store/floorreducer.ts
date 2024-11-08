import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FloorState {
  value: boolean[];
}

const initialState: FloorState = {
  value: [false, false, false, false, false],
};

export const floorSlice = createSlice({
  name: "floor",
  initialState,
  reducers: {
    changeAccess: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      state.value[index] = !state.value[index];
    },
  },
});

export const { changeAccess } = floorSlice.actions;
export default floorSlice.reducer;
