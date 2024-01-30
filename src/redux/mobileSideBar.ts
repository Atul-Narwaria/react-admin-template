import { createSlice } from '@reduxjs/toolkit';

let initialState:boolean = false;

const mobileSideBar:any = createSlice({
  name: 'mobileSideBar',
  initialState,
  reducers: {
    isMobileSideBar: (state:any, action:any) => {
        return action.payload;
    },
  },
});
export const {isMobileSideBar} =
mobileSideBar.actions;
export default mobileSideBar.reducer;

