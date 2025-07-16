import { createSlice } from '@reduxjs/toolkit'

export const counterHookSlice = createSlice({
  name: 'counterHook',
  initialState: {
    value: 0
  },
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
      if (state.value < 0) {
        state.value = 0
      }
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    reset: state => {
      state.value = 0
    }
  }
})

export const { increment, decrement, incrementByAmount, reset } = counterHookSlice.actions

export default counterHookSlice.reducer