import { configureStore } from "@reduxjs/toolkit";
import builderReducer from "@/features/builderSlice";

export default configureStore({
  reducer: {
    builder: builderReducer,
  },
});
