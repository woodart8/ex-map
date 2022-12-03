import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from "react-router-dom";
import Item from '../components/AnswerItem';
import styled from 'styled-components'
import MainHeader from '../components/MainHeader'
import axios from 'axios';
const QnAViewContainer = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: #EDEDED;
  overflow: auto;

  .no-answer {
    position: relative;
    width: 500px;
    height: 50px;
    left: 50%;
    margin-top: 80px;
    margin-bottom: 30px;
    transform: translateX(-50%);
    box-shadow: 4px 4px 4px rgba(0,0,0,0.25);
    border-radius: 10px;
    border: none;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 50px;
    text-align: center;
    color: #ffffff;
    background-color: #BA9F77;
  }

  .no-qna {
    position: relative;
    width: 500px;
    height: 50px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #ffffff;
    box-shadow: 4px 4px 4px rgba(0,0,0,0.25);
    border-radius: 10px;
    border: none;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 50px;
    text-align: center;
    color: #ffffff;
    background-color: #BA9F77;
  }
`;

const QnAViewForm = styled.div`
  position: absolute;
  height: 100vh;
  width: 900px;
  left: 50%;
  transform: translateX(-50%);

  .qna-view-go-list-btn {
    position: absolute;
    width: 200px;
    height: 35px;
    right: 10px;
    margin-top: 35px;

    border-radius: 40px;
    border: none;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 25px;
    text-align: center;
    color: #ffffff;
    background-color: #BA9F77;
  }

  .qna-view-go-list-btn:hover {
    background: #BA9F77;
    cursor: pointer;
    transform: translateY(-1px);
  }
`;

const QuestionView = styled.div`
  position: relative;
  width: 900px;
  height: 500px;
  left: 50%;
  margin-top: 30px;
  transform: translateX(-50%);
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
    top: 120px;
    word-break:break-word;
    white-space: pre-wrap;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    text-align: left;
    color: #000000;
  }

  .qna-writer {
    position: absolute;
    width: 370px;
    height: 33px;
    right: 30px;
    bottom: 25px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    text-align: right;

    color: #818181;
  }

  .qna-answer-btn {
    position: absolute;
    width: 100px;
    height: 35px;
    left: 50px;
    bottom: 25px;

    border-radius: 40px;
    border: none;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 25px;
    text-align: center;
    color: #ffffff;
    background-color: #BA9F77;
  }

  .qna-answer-btn:hover {
    background: #BA9F77;
    cursor: pointer;
    transform: translateY(-1px);
  }
`;

const AnswerView = styled.div`
  .qna-title {
    position: absolute;
    width: 830px;
    height: 50px;
    left: 53px;
    top: 20px;
    word-break:break-all;
  
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 42px;
    text-align: left;
    color: #ba9f77;
  }
  
  .qna-content {
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
    font-size: 20px;
    line-height: 30px;
    text-align: left;
    color: #000000;
  }
  
  .qna-docentName {
    position: absolute;
    width: 370px;
    height: 33px;
    right: 30px;
    bottom: 25px;
      
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    text-align: right;
    
    color: #818181;
  }

  .qna-answer-button {
    position: absolute;
    width: 85px;
    height: 35px;
    left: 50px;
    bottom: 25px;

    border-radius: 40px;
    border: none;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    text-align: center;
    color: #ffffff;
    background-color: #BA9F77;
  }
`;

function QnAView() {
  const location = useLocation();
  const questionData = {
    question_title: location.state.question_title,
    question_content: location.state.question_content,
    question_writer: location.state.question_writer
  }
  const { qid } = useParams();
  const [ answerList, setAnswerList ] = useState([]);

  axios.post('http://localhost:5000/api/qna/answer',
    {
      'qid': qid
    }
    ).then((response) => {
      if(answerList.length == 0) {
          setAnswerList(response.data);
      }
    })

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  }

  const clickPostAnswer = () => {
    navigate('/answer/post')
  }

  return (
    <QnAViewContainer>
      <QnAViewForm>
        {
          questionData ? (
            <QuestionView>
                  <div className="qna-title">Q. { questionData.question_title }</div>
                  <div className="qna-content">{ questionData.question_content }</div>
                  <button className="qna-answer-btn" onClick={clickPostAnswer}>답변하기</button> 
                  <div className='qna-writer'>{ questionData.question_writer }</div>
            </QuestionView>
          ) : 
          <div className="no-qna">해당 Q&A 게시글을 찾을 수 없습니다.</div>
        }
        {
          answerList ? (
            <AnswerView>
              {
                answerList.map((item, idx) => 
                  <div key={idx}>
                    <Item item = {item}/>
                  </div>
                )
              }
            </AnswerView>
          ) : 
          <div className="no-answer">해당 Q&A 게시글에 달린 답변이 없습니다.</div>
        }
        <button className="qna-view-go-list-btn" onClick={handleClick}>목록으로 돌아가기</button>
      </QnAViewForm>
    </QnAViewContainer>
  )
}

export default QnAView;