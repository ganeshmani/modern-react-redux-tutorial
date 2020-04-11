import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";
import plus_icon from "../../plus_icon.png";
import styled from "styled-components";

import {
  selectQuestions,
  addQuestion,
  removeQuestion,
  editQuestion,
} from "./questionSlice";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #efecec;
`;

const QuestionsContainer = styled.div`
  display: flex;
  flex-flow: column;
  padding: 3.75rem 5rem;
`;

const QuestionListItem = styled.div`
  padding: 10px;
`;

const QuestionTitle = styled.div``;

const AddQuestionButtonContainer = styled.div`
  cursor: pointer;
  width: 10%;
  margin: auto;
  display: flex;
  padding: 10px;
  justify-content: center;
  background-color: #edf2f7;
  border-radius: 8px;
  font-weight: 600;

  &:hover {
    background-color: #e2e8f0;
  }
`;

const AddQuestionIcon = styled.img`
  width: 14px;
  height: 14px;
`;

const AddQuestionName = styled.div``;

const FormContainer = styled.div`
  padding: 0.625rem 1rem;
  /* margin: 1.25rem -1.25rem; */
  box-shadow: 0 0.125rem 0.375rem rgba(0, 0, 0, 0.2);
  border-radius: 0.3125rem;
  background: #fff;
  width: 50%;
  margin: 10px auto;
`;

const FormContainerDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const FormLabel = styled.label``;

const FormContainerTitleInput = styled.input`
  flex: 1;
  font-size: 0.9375rem;
  width: 50%;
  margin: auto;
  height: 100px;
`;

const FormContainerBodyInput = styled.input`
  flex: 1;
  font-size: 0.9375rem;
  padding: 0.75rem 0.5rem;
  width: 50%;
  margin: auto;
  height: 100px;
`;

const AddQuestionButton = styled.button``;

const Questions = () => {
  const [showAddQuestion, setShowAddQuestion] = useState(false);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const questions = useSelector(selectQuestions);
  const dispatch = useDispatch();

  const onSubmit = () => {
    let data = {
      id: questions.length + 1,
      title: title,
      body,
    };

    dispatch(addQuestion(data));
    setShowAddQuestion(false);
    setTitle("");
    setBody("");
  };

  return (
    <Container>
      <QuestionsContainer>
        {questions && questions.length > 0 ? (
          questions.map((question, index) => {
            return (
              <QuestionListItem key={index}>
                <Link to={`/question/${question.id}`}>
                  <QuestionTitle>{question.title}</QuestionTitle>
                </Link>
              </QuestionListItem>
            );
          })
        ) : (
          <div>No Data Found</div>
        )}
      </QuestionsContainer>
      <AddQuestionButtonContainer onClick={() => setShowAddQuestion(true)}>
        <AddQuestionIcon src={plus_icon} />
        <AddQuestionName>Add Question</AddQuestionName>
      </AddQuestionButtonContainer>

      {showAddQuestion ? (
        <FormContainer>
          <FormContainerDiv>
            <FormLabel>Title</FormLabel>
            <FormContainerTitleInput
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </FormContainerDiv>

          <FormContainerDiv>
            <FormLabel>Body</FormLabel>
            <FormContainerBodyInput
              type="textarea"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </FormContainerDiv>
          <AddQuestionButton onClick={onSubmit}>Submit</AddQuestionButton>
        </FormContainer>
      ) : (
        ""
      )}
    </Container>
  );
};

export default Questions;
