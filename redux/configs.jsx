import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: {},
}

export const configsSlice = createSlice({
  name: "configs",
  initialState,
  reducers: {
    setConfigs: (state, configs) => {
      state.value = configs.payload;
    },
  },
});

export const { setConfigs } = configsSlice.actions;

export default configsSlice.reducer