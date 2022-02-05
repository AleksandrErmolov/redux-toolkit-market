import {createStore} from "redux";
import {productApi} from "./product/product.api";
import {configureStore} from "@reduxjs/toolkit";
import {cartReducer} from "./cart/cart.slice";

export {createStore} from '@reduxjs/toolkit'


export const store = configureStore({
reducer: {[productApi.reducerPath]: productApi.reducer ,  cart:cartReducer},


})


export type TypeRootState =ReturnType<typeof store.getState>