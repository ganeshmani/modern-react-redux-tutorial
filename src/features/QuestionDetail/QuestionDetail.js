import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

import Comments from "../Comments/Comments";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #efecec;
`;

const QuestionsContainer = styled.div`
  display: flex;
  flex-flow: column;
  padding: 3.75rem 5rem;
  width: 20%;
  box-shadow: 0 0.125rem 0.375rem rgba(0, 0, 0, 0.2);
  border-radius: 0.3125rem;
  background: #fff;
  margin: auto;
`;

const Heading = styled.h2``;

const QuestionLabel = styled.h4`
  font-weight: 300;
`;

const QuestionDetail = (props) => {
  const { id } = useParams();
  if (!id) {
  }
  const questionDetail = useSelector((state) => {
    let question = state.questions.find((question) => question.id == id);

    return question;
  });

  return (
    <Container>
      <QuestionsContainer>
        <Heading>Title:</Heading>
        <QuestionLabel>{questionDetail && questionDetail.title}</QuestionLabel>
        <Heading>Body:</Heading>
        <QuestionLabel>{questionDetail && questionDetail.body}</QuestionLabel>
      </QuestionsContainer>
      {questionDetail ? <Comments id={questionDetail.id} /> : null}
    </Container>
  );
};

export default QuestionDetail;
