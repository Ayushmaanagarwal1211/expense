import { configureStore } from "@reduxjs/toolkit";
import slice from './slice.js'
import { filter_slice } from "./slice.js";
export default configureStore({
    reducer: {
        expense:slice,    // slice name we can create multiple slices 
        filter : filter_slice
    }
})