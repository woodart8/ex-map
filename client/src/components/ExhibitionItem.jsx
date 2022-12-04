import React, {useState} from "react";
import { Link } from "react-router-dom"
import styled from "styled-components";
const ExhibitionItemContainer = styled.div`
  position: relative;
  width: 900px;
  height: 250px;
  margin-top: 30px;
  left: 50%;
  transform: translateX(-50%);
`;

const ExhibitionItemForm = styled.div`
  position: relative;
  display: flex;
  width: 900px;
  height: 250px;
  left: 50%;
  transform: translateX(-50%);
  display: block;
  background-color: #ffffff;
  box-shadow: 4px 4px 4px rgba(0,0,0,0.25);
  border-radius: 10px;
  border: none;
  
  .exibition-img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 30px;
    height: 110px;
    width: 110px;
  }

  .exhibition-title {
    position: absolute;
    width: 500px;
    height: 50px;
    left: 193px;
    top: 67px;
    word-break:break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 23px;
    line-height: 23px;
    text-align: left;
    color: #000000;
  }

  .exhibition-info {
    position: absolute;
    width: 500px;
    height: 84px;
    left: 193px;
    top: 95px;
    word-break:break-word;
    white-space: pre-wrap;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 28px;
    text-align: left;
    color: #000000;
  }

  .booking-exhibition {
    position: absolute;
    width: 115px;
    height: 45px;
    right: 30px;
    top: 70px;
    
    background: #000000;
    border-radius: 40px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 25px;

    color: #FFFFFF;
  }

  .ask-question {
    position: absolute;
    width: 115px;
    height: 45px;
    right: 30px;
    top: 130px;
    
    background: #000000;
    border-radius: 40px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 25px;

    color: #FFFFFF;
  }
`

function Item({item}){
    return (
      <ExhibitionItemContainer>
        <ExhibitionItemForm>
            <img className="exibition-img" src={item.ex_img}></img> 
            <div className="exhibition-title">{item.ex_title}</div>
            <div className="exhibition-info">{item.ex_info}</div>
          <Link to={`/booking/${item.ex_id}`} 
            state={{
              ex_id: item.ex_id,
              ex_title: item.ex_title,
              ex_info: item.ex_info,
              ex_img: item.ex_img,
              ex_ticket: item.ex_ticket,
              ex_start: item.ex_start,
              ex_end: item.ex_end,
              ex_place: item.ex_place,
              ex_addr: item.ex_addr
            }}>
              <button className="booking-exhibition">결제하기</button>
          </Link>
          <Link to={`/question/post`} 
            state={{
              ex_id: item.ex_id,
              ex_title: item.ex_title,
            }}>
              <button className="ask-question">질문하기</button>
          </Link>
        </ExhibitionItemForm>
      </ExhibitionItemContainer>
    );
  }
  
  export default Item;