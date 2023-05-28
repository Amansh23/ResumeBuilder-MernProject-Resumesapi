import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  errors: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loaduser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.isLoading = false;
      state.errors = null;
  },
  removeuser: (state, action) => {
      state.user = null;
      state.isAuthenticated = false;
      state.errors = null;
      state.isLoading = false;
  },
  _error: (state, action) => {
      state.errors = action.payload;
      state.isLoading = false;
  },
  emptyerror: (state, action) => {
      state.errors = null;
      state.isLoading = false;
  },
  _loading: (state, action) => {
      state.isLoading = action.payload;
  },
  },
})

// Action creators are generated for each case reducer function
export const { loaduser, _error, _loading, emptyerrors, removeuser } = userSlice.actions

export default userSlice.reducer