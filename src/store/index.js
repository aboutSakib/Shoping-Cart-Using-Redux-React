// import { composeWithDevTools } from "@redux-devtools/extension";
// import { combineReducers, createStore } from "redux";
// import { cartReducer } from "./reducers/cart";
// import { counterReducer } from "./reducers/counter";
// import { themeReducer } from "./reducers/theme";

// const rootReducer = combineReducers({
//   counter: counterReducer,
//   theme: themeReducer,
//   cart: cartReducer,
// });
// export const store = createStore(rootReducer, composeWithDevTools());

// using reduc-toolkit
import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./reducers/cart";
import { counterReducer } from "./reducers/counter";
import { themeReducer } from "./reducers/theme";

const rootReducer = {
  counter: counterReducer,
  theme: themeReducer,
  cart: cartReducer,
};
export const store = configureStore({
  reducer: rootReducer,
});
