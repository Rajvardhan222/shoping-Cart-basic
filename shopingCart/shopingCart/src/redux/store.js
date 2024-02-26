import { configureStore } from "@reduxjs/toolkit";

import productSlice from "./reducers"

const productStore = configureStore(
    reducer:productSlice
)
export default productStore