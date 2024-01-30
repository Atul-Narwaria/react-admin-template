import { createSlice } from '@reduxjs/toolkit';

let initialState:boolean = true;

const commonSlice:any = createSlice({
  name: 'commonSlice',
  initialState,
  reducers: {
    isOpenSideBar: (state:any, action:any) => {
        return action.payload;
    },
  

   
  },
});

export const {isOpenSideBar} =
commonSlice.actions;
export default commonSlice.reducer;

