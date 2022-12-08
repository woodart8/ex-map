import React, {useState} from "react";
import { Link } from "react-router-dom"
import styled from "styled-components";
const PromotionItemContainer = styled.div`
  position: relative;
  width: 900px;
  height: 250px;
  margin-top: 30px;
  left: 50%;
  transform: translateX(-50%);
`;

const PromotionItemForm = styled.div`
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
  
  .promotion-img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 30px;
    height: 110px;
    width: 110px;
  }

  .promotion-title {
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

  .promotion-content {
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

  .detail {
    position: absolute;
    width: 115px;
    height: 45px;
    right: 30px;
    top: 107px;
    
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
      <PromotionItemContainer>
        <PromotionItemForm>
            <img className="promotion-img" src={item.pro_img}></img> 
            <div className="promotion-title">{item.pro_title}</div>
            <div className="promotion-content">{item.pro_content}</div>
          <Link to={`/promotion/${item.pro_id}`} 
            state={{
              pro_id: item.pro_id,
              pro_title: item.pro_title,
              pro_writer: item.pro_writer,
              pro_content: item.pro_content,
              pro_period: item.pro_period,
              pro_place: item.pro_place,
              pro_img: item.pro_img,
              pro_info: item.pro_content
            }}>
              <button className="detail">상세정보</button>
          </Link>
        </PromotionItemForm>
      </PromotionItemContainer>
    );
  }
  
  export default Item;