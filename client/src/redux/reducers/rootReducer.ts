import { combineReducers } from "redux";
import searchReducer from './searchReducer';
import imagesReducer from "./imagesReducer";

const rootReducer = combineReducers({
  searchParams: searchReducer,
  images: imagesReducer
});

type TRootReducer = typeof rootReducer;
export type AppState = ReturnType<TRootReducer>

export default rootReducer;