import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import Pagination from "./Pagination";
import Axios from 'axios';

const DocentListForm = styled.div`
  position: absolute;
  height: 100%;
  width: 900px;
  left: 50%;
  top: 144px;
  transform: translateX(-50%);

  .docent-pagination {
    position: absolute;
    margin-top: 30px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const DocentBoxContainer = styled.div`
  position: relative;
  width: 900px;
  height: 250px;
  // margin-top: 30px;
  left: 50%;
  transform: translateX(-50%);
`;

const DocentBox=styled.div`
    position: absolute;
    width: 918px;
    height: 186px;
    left: 50%;
    transform: translate(-50%, 0%);
    background: #FFFFFF;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: block;
`;
const DocentImg=styled.img`
    position: absolute;
    width: 120px;
    height: 120px;
    left: 29px;
    top: 33px;
`;
const DocentName=styled.div`
    position: absolute;
    width: 136px;
    height: 32px;
    left: 179px;
    top: 39px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 30px;

    color: #000000;
`;
const DocentEmail=styled.div`
    position: absolute;
    width: 200px;
    height: 27px;
    left: 179px;
    top: 79px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 27px;

    color: #000000;
`;
const Questions=styled.div`
    position: absolute;
    width: 98px;
    height: 32px;
    left: 781px;
    top: 39px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 30px;
    text-align: center;

    color: #BA9F77;
`;
const QuestionN=styled.div`
    position: absolute;
    width: 98px;
    height: 32px;
    left: 781px;
    top: 93px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 30px;
    text-align: center;

    color: #BA9F77;
`;

function Item({item}){
    return (
      <DocentBoxContainer>
          <DocentBox>
            <DocentImg src={item.docent_img}></DocentImg>
            <DocentName>{item.docent_name}</DocentName>
            <DocentEmail>{item.docent_email}</DocentEmail>
            <Questions>답변 수</Questions>
            <QuestionN>{item.answer_count}</QuestionN>
          </DocentBox>
      </DocentBoxContainer>
    );
  }

function Docent() {
  const [doc_info, setDocInfo] = useState([])
  const [limit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  
  Axios.post('http://localhost:5000/api/docent/info')
    .then((response) => {
      if(doc_info.length == 0) {
        setDocInfo(response.data);
      }
      console.log(doc_info);
    })

    doc_info.sort((a,b)=>b.answer_count-a.answer_count);
    
  return (
        <DocentListForm>
          {doc_info.length!==0 ?
            doc_info.slice(offset, offset+limit).map((item, idx) =>
              <div key={idx}>
                <Item item = {item}/>
              </div>
            )
          :<></>}
          <div className='docent-pagination'>
            <Pagination
              total={doc_info.length}
              limit={limit}
              page={page}
              setPage={setPage}
            />
          </div>
        </DocentListForm>
  );
}

export default Docent;