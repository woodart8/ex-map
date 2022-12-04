import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import Item from './ExhibitionItem'
import styled from 'styled-components'
import Pagination from "./Pagination";
import SearchBar from './SearchBar';
import axios from 'axios';

const ExhibitionListContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
`;

const ExhibitionListForm = styled.div`
  position: absolute;
  height: 100%;
  width: 900px;
  left: 50%;
  transform: translateX(-50%);

  .exhibition-pagination {
    position: absolute;
    margin-top: 30px;
    left: 50%;
    transform: translateX(-50%);
  }

  .no-exhibition {
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
`;


function Exhibition() {
  const [ExhibitionList, setExhibitionList] = useState([])
  const [limit] = useState(10);  //한 페이지에 전시회 몇개씩 나오는지
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  const [search, setSearch] = useState("");
  const onChange = (e) => {
      setSearch(e.target.value)
  }
  axios.get('http://localhost:5000/api/exhibition')
    .then((response) => {
      if(ExhibitionList.length == 0) {
        setExhibitionList(response.data);
      }
    })
  
  const searchList = ExhibitionList.filter((item) => {
    return item.ex_title.replace(" ","").toLowerCase().includes(search.toLowerCase().replace(" ",""));
  });

  return (
    <ExhibitionListContainer>
        <ExhibitionListForm>
          <SearchBar value={search} onChange={onChange}/>
          {searchList.length !== 0 ?
            searchList.slice(offset, offset+limit).map((item, idx) =>
              <div key={idx}>
                <Item item = {item}/>
              </div>
            )
            :
            <div className='no-exhibition'>검색된 전시가 없습니다.</div>
          }
          <div className='exhibition-pagination'>
            <Pagination
              total={searchList.length}
              limit={limit}
              page={page}
              setPage={setPage}
            />
          </div>
        </ExhibitionListForm>
    </ExhibitionListContainer>
  );
}

export default Exhibition;