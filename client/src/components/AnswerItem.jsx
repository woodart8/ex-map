import React, {useState} from "react";
import { Link } from "react-router-dom"
import styled from "styled-components";

const AnswerItemContainer = styled.div`
  position: relative;
  width: 900px;
  height: 400px;
  left: 50%;
  transform: translateX(-50%);
  display: block;
  margin-top: 30px;
  background-color: #ffffff;
  box-shadow: 4px 4px 4px rgba(0,0,0,0.25);
  border-radius: 10px;
  border: none;

  .answer-title {
    position: absolute;
    width: 830px;
    height: 50px;
    left: 53px;
    top: 20px;
    word-break:break-all;
    white-space: nowrap;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 42px;
    text-align: left;
    color: #BA9F77;
  }

  .answer-content {
    position: absolute;
    width: 830px;
    height: 95px;
    left: 50px;
    top: 120px;
    word-break:break-word;
    white-space: pre-wrap;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 30px;
    text-align: left;
    color: #000000;
  }

  .answer-writer {
    position: absolute;
    width: 370px;
    height: 33px;
    right: 30px;
    bottom: 20px;
      
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 30px;
    text-align: right;
      
    color: #818181;
  }
`

function Item({item}){
    return (
      <AnswerItemContainer>
        <div className="answer-title">A. {item.answer_title}</div>
        <div className="answer-content">{item.answer_content}</div>
        <div className="answer-writer">{item.answer_writer}</div>
      </AnswerItemContainer>
    );
  }
  
  export default Item;