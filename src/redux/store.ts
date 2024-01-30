import { configureStore } from '@reduxjs/toolkit';
import breadcrumSlice from './breadcrumSlice';
import commonSlice from './commonSlice';
import mobileSideBar from './mobileSideBar';
import themeSlice from './themeSlice';

const store = configureStore({
    reducer: {
        breadcrumSlice: breadcrumSlice,
        commonSlice:commonSlice,
        mobileSideBar:mobileSideBar,
        themeSlice:themeSlice
    },
});

export default store;