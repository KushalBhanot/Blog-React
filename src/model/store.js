import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../controller/userSlice";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
