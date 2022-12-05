import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import Item from './PromotionItem'
import styled from 'styled-components'
import Pagination from "./Pagination";
import SearchBar from './SearchBar';
import axios from 'axios';

const PromotionListContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
`;

const PromotionListForm = styled.div`
  position: absolute;
  height: 100%;
  width: 900px;
  left: 50%;
  transform: translateX(-50%);

  .promotion-pagination {
    position: absolute;
    margin-top: 30px;
    left: 50%;
    transform: translateX(-50%);
  }

  .no-promotion {
    position: relative;
    width: 500px;
    height: 50px;
    top: 30px;
    left: 50%;
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

  .write-promotion-btn {
    position: absolute;
    width: 115px;
    height: 45px;
    right: 10px;
    margin-top: 35px;

    border-radius: 40px;
    border: none;

    background: #000000;
    border-radius: 40px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 25px;
    
    color: #FFFFFF;
  }

  .write-promotion-btn:hover {
    background: #000000;
    cursor: pointer;
    transform: translateY(-1px);
  }
`;


function Promotion() {
  const [PromotionList, setPromotionList] = useState([])
  const [limit] = useState(10);  //한 페이지에 전시회 몇개씩 나오는지
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const onChange = (e) => {
      setSearch(e.target.value)
  }
  axios.get('http://localhost:5000/api/promotion')
    .then((response) => {
      if(PromotionList.length == 0) {
        setPromotionList(response.data);
      }
    })
  
  const searchList = PromotionList.filter((item) => {
    return item.pro_title.replace(" ","").toLowerCase().includes(search.toLowerCase().replace(" ",""));
  });

  const clickPostPromotion = (e) => {
    navigate('/promotion/post');
  }

  return (
    <PromotionListContainer>
        <PromotionListForm>
          <SearchBar value={search} onChange={onChange}/>
          {searchList.length !== 0 ?
            searchList.slice(offset, offset+limit).map((item, idx) =>
              <div key={idx}>
                <Item item = {item}/>
              </div>
            )
            :
            <div className='no-promotion'>검색된 전시가 없습니다.</div>
          }
          <button className='write-promotion-btn' onClick={clickPostPromotion}>홍보 작성</button>
          <div className='promotion-pagination'>
            <Pagination
              total={searchList.length}
              limit={limit}
              page={page}
              setPage={setPage}
            />
          </div>
        </PromotionListForm>
    </PromotionListContainer>
  );
}

export default Promotion;