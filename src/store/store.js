 import {configureStore} from "@reduxjs/toolkit"
 import pageContentReducer from "./pageContentSlice"
 import cartReducer from "./cartSlice";
 import productsReducer from "./productsSlice"; 
 const store = configureStore({
   reducer: {
     pageContent: pageContentReducer,
     cart: cartReducer,
     products: productsReducer,
   },
 });
 export default store;