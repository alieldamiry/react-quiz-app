import { createSlice } from "@reduxjs/toolkit";
import questions from "../../data";

const initialState = {
  questions: questions,
  username: "",
};

export const mainSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    selectAnswer: (state, action) => {
      state.questions.forEach((question) => {
        console.log("selecting........");
        if (question.id === action.payload.questionId) {
          console.log("selecting........");
          question.userAnswerId = action.payload.answer;
        }
      });
    },

    submitUserName: (state, action) => {
      state.username = action.payload;
    },
  },
});

export const { submitUserName, selectAnswer } = mainSlice.actions;

export default mainSlice.reducer;
