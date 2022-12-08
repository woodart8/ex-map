import styled, { css } from 'styled-components'
import React, { useState, useEffect } from 'react'


import Axios from 'axios'
import { useLocation } from 'react-router-dom';


const Promotion2Page=styled.div`
    height: 937px;
    width: 100%;
    background-color: #EDEDED;
    position: relative;
`;

const PromotionContainer = styled.div`
  width: 918px;
  height: 784px;
  background-color: #fff;
  border: 1px solid #000;
  position: absolute;
  top: 59px;
  left: 50%;
  transform: translate(-50%, 0%);
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

function Promotion2(props){
    const location = useLocation();

    const [promotionExhi, setPromotionExhi] = useState([])

    const [poster, setPoster] = useState(location.state.pro_img)
    const [title, setTitle] = useState(location.state.pro_title)
    const [writer, setWriter] = useState(location.state.pro_writer)
    const [period, setPeriod] = useState(location.state.pro_period)
    const [place, setPlace] = useState(location.state.pro_place)
    const [info, setInfo] = useState(location.state.pro_info)
    const [pro_id,setEx_id]=useState(location.state.pro_id)

    Axios.post(
        'http://localhost:5000/api/promotion/proid',
        {proId: pro_id }).then((response) => {
            if(promotionExhi.length==0) {
                setPromotionExhi(response.data[0])
            }
            
    })

   return(
    <Promotion2Page>
        <PromotionContainer>
            <Poster src={poster}></Poster>
            <Title left="413px" top="48px">{promotionExhi.pro_title}</Title>
            <Line1 left="403px" top="119px" width="467px"></Line1>
            <BoldText left="413px" top="180px">게시자</BoldText>
            <Text left="592px" top="182px">{promotionExhi.pro_writer}</Text>
            <BoldText left="413px" top="262px">전시 기간</BoldText>
            <Text left="592px" top="264px">{promotionExhi.pro_period}</Text>
            <BoldText left="413px" top="342px">전시 장소</BoldText>
            <Text left="592px" top="346px">{promotionExhi.pro_place}</Text>
            {/* <Text left="592px" top="370px" width="240px" height="50px">{addr}</Text> */}
            <Line1 left="58px" top="451px" width="800px"></Line1>
            <BoldText left="76px" top="475px">상세정보</BoldText>
            <Text left="81px" top="539px" width="761px" height="178px">{promotionExhi.pro_content}</Text>
        </PromotionContainer>
    </Promotion2Page>
   )
}
export default Promotion2;
  
