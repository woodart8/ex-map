import React, {useState} from "react";
import { Link } from "react-router-dom"
import styled from "styled-components";
const QuestionItemContainer = styled.div`
  position: relative;
  width: 900px;
  height: 250px;
  margin-top: 30px;
  left: 50%;
  transform: translateX(-50%);
`;

const QuestionItemForm = styled.div`
  position: absolute;
  width: 900px;
  height: 250px;
  left: 50%;
  transform: translateX(-50%);
  display: block;
  background-color: #ffffff;
  box-shadow: 4px 4px 4px rgba(0,0,0,0.25);
  border-radius: 10px;
  border: none;

  .qna-title {
    position: absolute;
    width: 830px;
    height: 50px;
    left: 53px;
    top: 20px;
    word-break:break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 42px;
    text-align: left;
    color: #000000;
  }

  .qna-content {
    position: absolute;
    width: 830px;
    height: 95px;
    left: 50px;
    top: 80px;
    word-break:break-word;
    white-space: pre-wrap;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 30px;
    text-align: left;
    color: #000000;
  }

  .qna-answerCount {
    position: absolute;
    width: 163px;
    height: 33px;
    left: 50px;
    bottom: 20px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    text-align: left;
    color: #BA9F77;
  }

  .qna-exTitle {
    position: absolute;
    width: 370px;
    height: 33px;
    right: 30px;
    bottom: 20px;
      
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    text-align: right;
      
    color: #818181;
  }
`

function Item({item}){
    return (
      <QuestionItemContainer>
        <Link to={`/qna/${item.no}`}>
          <QuestionItemForm>
            <div className="qna-title">Q. {item.title}</div>
            <div className="qna-content">{item.content}</div>
            <div className="qna-answerCount">답변 수 : {item.answerCount}</div>
            <div className="qna-exTitle">{item.exTitle}</div>
          </QuestionItemForm>
        </Link>
      </QuestionItemContainer>
    );
  }
  
  export default Item;