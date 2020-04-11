import { createSlice } from "@reduxjs/toolkit";

export const commentSlice = createSlice({
  name: "comments",
  initialState: [],
  reducers: {
    addComment: (state, action) => {
      console.log("Action", action);
      state = state.push({
        id: action.payload.id,
        comment: action.payload.comment,
        questionId: action.payload.questionId,
      });
    },
    editComment: (state, action) => {
      state = state.map((comment) => {
        if (comment.id == action.payload.id) {
          return {
            id: action.payload.id,
            comment: action.payload.comment,
            questionId: action.payload.questionId,
          };
        } else {
          return {
            ...comment,
          };
        }
      });
      return state;
    },
    removeComment: (state, action) => {
      state = state.filter((comment) => comment.id !== action.payload.id);

      return state;
    },
  },
});

export const { addComment, editComment, removeComment } = commentSlice.actions;

export const comments = (state) => state.comments;

export default commentSlice.reducer;
