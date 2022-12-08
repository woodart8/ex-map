import styled, { css } from 'styled-components'
import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'
import { useLocation } from 'react-router-dom';


const BookingPage=styled.div`
    height: 937px;
    width: 100%;
    background-color: #EDEDED;
    position: relative;
`;

const BookingContainer = styled.div`
  width: 918px;
  height: 784px;
  background-color: #fff;
  border: 1px solid #000;
  position: absolute;
  top: 59px;
  left: 50%;
  transform: translate(-50%, 0%);
`


const BookingButton=styled.button`
    position: absolute;
    top: 795px;
    left: 1500px;
    background-color: #000;
    color: #fff;
    font-size: 20px;
    width: 115px;
    height: 49px;
    border-radius: 40px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 25px;
    cursor: pointer;
`

const Line1=styled.hr`
    position: absolute;
    border: 1px solid #000000;
    margin:0px;

    ${({left})=>
        `    left: ${left};
        `}
        ${({top})=>
        `    top: ${top};
        `}
`;

const Title=styled.div`
        position: absolute;
        width: 406px;
        height: 68px;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 30px;
        line-height: 36px;

        color: #000000;

        ${({left})=>
        `    left: ${left};
        `}
        ${({top})=>
        `    top: ${top};
        `}
`;


const BoldText=styled.div`
        position: absolute;
        width: 200px;
        height: 40px;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 27px;
        line-height: 36px;

        color: #000000;

        ${({left})=>
        `    left: ${left};
        `}
        ${({top})=>
        `    top: ${top};
        `}
`;

const Poster=styled.img`
    position: absolute;
    box-sizing: border-box;
    position: absolute;
    width: 301px;
    height: 365px;
    left: 60px;
    top: 45px;
    border: 1px solid #000000;
`;



const Text=styled.div`
    position: absolute;
    width: 332px;
    height: 69px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;

    color: #000000;
    overflow: hidden;

        ${({left})=>
        `    left: ${left};
        `}
        ${({top})=>
        `    top: ${top};
        `}
        ${({width})=>
        `    width: ${width};
        `}
        ${({height})=>
        `    height: ${height};
        `}

`;

function Booking({ loginAddr }){
    const location = useLocation();
   const [title, setTitle] = useState(location.state.ex_title)
   const [poster, setPoster] = useState(location.state.ex_img)
   const [price, setPrice] = useState(location.state.ex_ticket)
   const [start, setStart] = useState(location.state.ex_start)
   const [end, setEnd] = useState(location.state.ex_end)
   const [place, setPlace] = useState(location.state.ex_place)
   const [addr,setAddr]=useState(location.state.ex_addr)
   const [info, setInfo] = useState(location.state.ex_info)
   const [ex_id,setEx_id]=useState(location.state.ex_id)

   const navigate = useNavigate()

   function Click(){
    console.log("test")
    Axios.post('http://localhost:5000/api/booking', {
        'exhibitionADDRESS': addr,
        'sender': loginAddr,
        'value': price
    })
    .then((response) => {
            if(response.data.success) {
                navigate('/booking2',{
                    state:{
                        ex_id: ex_id,
                        ex_title: title
                      }
                })
            }
    })
   }
   return(
    <BookingPage>
        <BookingContainer>
            <Poster src={poster}></Poster>
            <Title left="413px" top="60px">{title}</Title>
            <Line1 left="403px" top="119px" width="467px"></Line1>
            <BoldText left="413px" top="180px">티켓 가격</BoldText>
            <Text left="592px" top="182px">{price}</Text>
            <BoldText left="413px" top="262px">전시 기간</BoldText>
            <Text left="592px" top="264px">{start} ~ {end}</Text>
            <BoldText left="413px" top="342px">전시 장소</BoldText>
            <Text left="592px" top="346px">{place}</Text>
            {/* <Text left="592px" top="370px" width="240px" height="50px">{addr}</Text> */}
            <Line1 left="58px" top="451px" width="800px"></Line1>
            <BoldText left="76px" top="475px">상세정보</BoldText>
            <Text left="81px" top="539px" width="761px" height="178px">{info}</Text>
        </BookingContainer>
        <BookingButton onClick={()=>Click()}>결제하기</BookingButton>
    </BookingPage>
   )
}
export default Booking;
  
