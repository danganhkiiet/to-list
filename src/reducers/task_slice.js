import { createSlice } from '@reduxjs/toolkit'

export const taskSlice = createSlice({
  name: 'task',
  initialState: {
    list: [],
  },
  reducers: {
    Add: (state, action) => {
      state.list = state.list.concat(action.payload) // type, payload
    },
    Del: (state, action) => {
      state.list = state.list.filter(function (task) {
        return task != action.payload;
      })
    },
  },
})

export const { Add, Del } = taskSlice.actions

export default taskSlice.reducer