import { createSlice } from '@reduxjs/toolkit';

let initialState:any = localStorage.getItem('theme');

const themeSlice:any = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    theme: (state:any, action:any) => {
        return action.payload;
    },
  

   
  },
});

export const {theme} =
themeSlice.actions;
export default themeSlice.reducer;

