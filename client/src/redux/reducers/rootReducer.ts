import { combineReducers } from "redux";
import searchReducer from './searchReducer';
import imagesReducer from "./imagesReducer";
import loaderReducer from "./loaderReducer";

const rootReducer = combineReducers({
  searchParams: searchReducer,
  images: imagesReducer,
  loading: loaderReducer
});

type TRootReducer = typeof rootReducer;
export type AppState = ReturnType<TRootReducer>

export default rootReducer;