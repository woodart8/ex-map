import React, { useEffect, useState } from 'react';
import GlobalStyle from '../components/GlobalStyle';
import { useParams, useNavigate } from "react-router-dom";
import { getQnAByNo, getAnswerByNo } from '../assets/QnAData';
import Item from '../components/AnswerItem';
import styled from 'styled-components'
const QnAViewDefaultBackground = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: #EDEDED;
  overflow: auto;
`;

const QnAViewContainer = styled.div`
  position: absolute;
  height: 100vh;
  width: 900px;
  left: 50%;
  transform: translateX(-50%);

  .go-list {
    position: relative;
    width: 900px;
    height: 150px;
  }

  .qna-view-go-list-btn {
    position: absolute;
    width: 200px;
    height: 35px;
    right: 5px;
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

.qna-exTitle {
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

const QnAView = () => {

  const [ data, setData ] = useState({});
  const { no } = useParams();
  const [ answerList, setAnswerList ] = useState([]);

  useEffect(() => {
    setAnswerList(getAnswerByNo(no));
  })

  useEffect(() => {
    setData(getQnAByNo(no));
  }, [ ]);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  }

  return (
    <div>
      <GlobalStyle />
      <QnAViewDefaultBackground>
        <QnAViewContainer>
          {
            data ? (
              <div>
                <QuestionView>
                    <div className="qna-title">Q. { data.title }</div>
                    <div className="qna-content">{ data.content }</div>
                    <button className="qna-answer-btn">답변하기</button> 
                    <div className='qna-exTitle'>{ data.exTitle }</div>
                </QuestionView>
                {
                  answerList ? (
                    <AnswerView>
                    {
                      answerList.map((item) => 
                      <Item item = {item}/>
                      )
                    }
                    </AnswerView>
                  ) : 
                  <div className="no-answer">해당 Q&A 게시글에 달린 답변이 없습니다.</div>
                }
              </div>
            ) : 
            <div className="no-qna">해당 Q&A 게시글을 찾을 수 없습니다.</div>
          }
          <div className='go-list'>
            <button className="qna-view-go-list-btn" onClick={() => handleClick()}>목록으로 돌아가기</button>
          </div>
        </QnAViewContainer>
      </QnAViewDefaultBackground>
    </div>
  )
}

export default QnAView;