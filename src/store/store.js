import { configureStore } from '@reduxjs/toolkit'
import  userReducer  from '../store/Reducers/userSlice'
export const store = configureStore({
  reducer: {
      userReducer
  },
})