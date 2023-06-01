import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const reservationSlice = createSlice({
  name: "reservation",
  initialState,
  reducers: {
    setReservation: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setReservation } = reservationSlice.actions

export default reservationSlice.reducer