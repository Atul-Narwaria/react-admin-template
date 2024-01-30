import { createSlice } from '@reduxjs/toolkit';

const initialState:any = [
  { label: 'Dashboard', path: '/admin/dashboard' },
];

const breadcrumbSlice:any = createSlice({
  name: 'breadcrumbs',
  initialState,
  reducers: {
    setBreadcrumbs: (state:any, action:any) => {
        
        return action.payload;
    },
    addToBreadcrumbs: (state:any, action:any) => {
        // Ensure items is initialized as an array before using push
        return action.payload;
      },
  },
});
export const {setBreadcrumbs,addToBreadcrumbs} =
breadcrumbSlice.actions;
export default breadcrumbSlice.reducer;

