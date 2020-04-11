import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { addComment } from "./commentsSlice";

const CommentsContainer = styled.div``;

const CommentHeading = styled.h4``;

const CommentLists = styled.ul`
  text-decoration: none;
  list-style: none;
  display: flex;
  flex-flow: column;
  padding: 1.75rem;
  max-height: 200px;
  overflow: auto;
`;

const AddCommentsInput = styled.input`
  width: 10%;
  height: 32px;
  border-radius: 8px;
`;

const CommentListItem = styled.div`
  padding: 10px;
`;

const CommentTitle = styled.div``;

const Comments = ({ id }) => {
  const [comment, setComment] = useState("");

  const comments = useSelector((state) => {
    let comments = state.comments.filter((comment) => comment.questionId == id);

    return comments;
  });
  const dispatch = useDispatch();

  const onAddComment = (e) => {
    if (e.key !== "Enter") {
      return;
    }

    if (e.key === "Enter") {
      let data = {
        id: comments && comments.length > 0 ? comments.length + 1 : 1,
        comment: comment,
        questionId: id,
      };

      dispatch(addComment(data));
      setComment("");
    }
  };
  return (
    <div>
      <CommentsContainer>
        <CommentHeading>Comments</CommentHeading>
        <CommentLists>
          {comments &&
            comments.map((comment) => (
              <CommentListItem key={comment.id}>
                <CommentTitle>{comment.comment}</CommentTitle>
              </CommentListItem>
            ))}
        </CommentLists>
        <AddCommentsInput
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          onKeyPress={onAddComment}
        />
      </CommentsContainer>
    </div>
  );
};

export default Comments;
