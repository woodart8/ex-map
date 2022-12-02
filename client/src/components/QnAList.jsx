import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { questionList } from '../assets/QnAData';
import Item from './QuestionItem'
import styled from 'styled-components'
import Pagination from "./Pagination";

const QnAListContainer = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: #EDEDED;
  overflow: auto;
`;

const QnAListForm = styled.div`
  position: absolute;
  height: 100vh;
  width: 900px;
  left: 50%;
  transform: translateX(-50%);

  .write-question-btn {
    position: absolute;
    width: 100px;
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

  .write-question-btn:hover {
    background: #BA9F77;
    cursor: pointer;
    transform: translateY(-1px);
  }

  .question-pagination {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`;


function QnAList() {
  const [ dataList, setDataList ] = useState([]);
  const [limit] = useState(10);
  const [page, setPage] = useState(1);
  const navigate = useNavigate()
  const offset = (page - 1) * limit;

  useEffect(() => {
    setDataList(questionList);
  }, [ ])

  const clickPostQuestion = () => {
    navigate('/question/post')
  }

  return (
    <QnAListContainer>
        <QnAListForm>
          {
            dataList.slice(offset, offset+limit).map((item) => 
                <Item item = {item}/>
            )
          }
          <button className='write-question-btn' onClick={clickPostQuestion}>글쓰기</button>
          <div className='question-pagination'>
            <Pagination
              total={dataList.length}
              limit={limit}
              page={page}
              setPage={setPage}
            />
          </div>
        </QnAListForm>
    </QnAListContainer>
  );
}

export default QnAList;