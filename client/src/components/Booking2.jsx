import styled from 'styled-components'
import check1 from '../assets/check1.png'

const Container=styled.div`
    height: 1218px;
    width: 100%;
    background-color: #EDEDED;
    position: relative;
`;
const Line1=styled.hr`
    border: 1px solid #000000;
    margin:0px;
`;
const Rectangle1=styled.div`
    position: absolute;
    width: 918px;
    height: 504px;
    left: 50%;
    top: 215px;
    transform: translate(-50%, 0%);
    background: #FFFFFF;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
`;
const CheckImg=styled.img`
    position: absolute;
    width: 120px;
    height: 120px;
    left: 399px;
    top: 105px;
`;
const Text1=styled.div`

    position: absolute;
    width: 507px;
    height: 57px;
    left: 205px;
    top: 252px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    text-align: center;

    color: #000000;
`;
const Text2=styled.div`
    position: absolute;
    width: 97px;
    height: 33px;
    left: 356px;
    ${({top})=>
    `    top: ${top};
    `}

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 30px;

    color: #000000;
`;
const Text3=styled.div`
    position: absolute;
    width: 180px;
    height: 33px;
    left: 459px;
    ${({top})=>
    `    top: ${top};
    `}

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 30px;

    color: #000000;
`;
function Booking2({ loginId, loginState, loginName }){
    return <Container>
        <Line1></Line1>
        <Rectangle1>
            <CheckImg src={check1}></CheckImg>
            <Text1>결제가 완료되었습니다!</Text1>
            <Text2 top='322px'>결제자</Text2>
            <Text3 top='322px'>{loginName}</Text3>
            <Text2 top='368px'>전시회</Text2>
            <Text3 top='368px'>{}</Text3>
        </Rectangle1>
    </Container>
}

export default Booking2;