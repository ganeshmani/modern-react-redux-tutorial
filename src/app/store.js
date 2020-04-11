import { configureStore } from "@reduxjs/toolkit";
import questionReducer from "../features/Questions/questionSlice";
import commentReducer from "../features/Comments/commentsSlice";
export default configureStore({
  reducer: {
    questions: questionReducer,
    comments: commentReducer,
  },
});
