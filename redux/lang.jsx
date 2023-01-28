import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 'en',
}

export const langSlice = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    setLang: (state, lang) => {
      state.value = lang.payload
    },
  },
})

export const { setLang } = langSlice.actions

export default langSlice.reducer