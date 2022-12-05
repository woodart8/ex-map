import styled from 'styled-components'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import user_profile from '../assets/user-profile.png'

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
    top: 58px;
    left: 50%;
    transform: translate(-50%, 0%);
    background: #FFFFFF;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;

    ${({height})=>
    `    height: ${height};
    `}
`;
const ProfileImg=styled.img`
    box-sizing: border-box;
    position: absolute;
    width: 225px;
    height: 225px;
    left: 40px;
    top: 48px;
    border: 1px solid #000000;
`;
const UserNameText=styled.div`
    position: absolute;
    width: 185px;
    height: 44px;
    left: 60px;
    top: 284px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 30px;
    text-align: center;

    color: #000000;
`;
const BoldText=styled.div`
        position: absolute;
        width: 200px;
        height: 44px;

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
const UserIdText=styled.div`
    position: absolute;
    width: 185px;
    height: 44px;
    left: 321px;
    top: 106px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 30px;

    color: #000000;
`;
const BlueText=styled.div`
    position: absolute;
    width: 195px;
    height: 44px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 30px;

    color: #4FC2E7;
    text-decoration: none;

    ${({left})=>
    `    left: ${left};
    `}
    ${({top})=>
    `    top: ${top};
    `}
`;
const Line2=styled.hr`
    position: absolute;
    width: 828px;
    left: 45px;
    border: 1px solid #818181;
    margin: 0px;

    ${({top})=>
    `    top: ${top};
    `}
`;
const ContentBox=styled.div`
        position: absolute;
        width: 380px;
        height: 133px;
        
        background: #FFFFFF;
        border: 1px solid rgba(0, 0, 0, 0.5);
        box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        
        ${({left})=>
        `    left: ${left};
        `}
        ${({top})=>
        `    top: ${top};
        `}
`;
const ContentTitle=styled.div`
    position: absolute;
    width: 332px;
    height: 31px;
    left: 19px;
    top: 14px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 30px;

    color: #000000;
    overflow: hidden;
`;
const ContentIn=styled.div`
    position: absolute;
    width: 332px;
    height: 69px;
    left: 21px;
    top: 50px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;

    color: #000000;
    overflow: hidden;

`;
const Poster=styled.img`
    position: absolute;
    width: 134px;
    height: 147px;
    top: 913px;

    ${({left})=>
    `    left: ${left};
    `}
`;
const Ellipse=styled.div`
    position: absolute;
    width: 160px;
    height: 49px;
    left: 700px;
    top: 853px;

    background: #000000;
    border-radius: 40px;
`;
const RcmdText=styled.div`
    position: absolute;
    width: 118px;
    height: 27px;
    left: 21px;
    top: 11px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 27px;

    color: #FFFFFF;
`;
const Msg=styled.div`
    position: absolute;
    width: 360px;
    height: 44px;
    left: 50%;
    transform: translate(-50%, 0%);
    ${({top})=>
    `    top: ${top};
    `}

    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 24px;

    color: #000000;
`;
function Mypage({ loginId, loginState, loginName, loginProfile}){

    if(loginState=='user'){

        const [question_info, setQuestionInfo] = useState([])
        Axios.post(
            `http://localhost:5000/api/user/question`,
             {
                      'id': loginId
               }
              ).then((response) => {
                    if(question_info.length == 0) setQuestionInfo(response.data)
                    //console.log(question_info)
                }
        );

        const [review_info, setReviewInfo] = useState([])
        Axios.post(
            `http://localhost:5000/api/user/review`,
             {
                      'id': loginId
               }
              ).then((response) => {
                    if(review_info.length == 0) setReviewInfo(response.data)
                    //console.log(review_info)
                }
        );

        const [ex_info, setExInfo] = useState([])
        Axios.post(
            `http://localhost:5000/api/user/exhibition`,
             {
                      'id': loginId
               }
              ).then((response) => {
                    if(ex_info.length == 0) setExInfo(response.data)
                    console.log(ex_info)
                }
        );

        return (
                <Container>
                    <Line1></Line1>
                    <Rectangle1 height="1096px">
                        {ProfileImg!==null? <ProfileImg src={loginProfile}></ProfileImg>
                        :<ProfileImg src={user_profile}></ProfileImg>}
                        <UserNameText>{loginName}</UserNameText>
                        <BoldText left="295px" top="62px">아이디</BoldText>
                        <UserIdText>{loginId}</UserIdText>
                        <BoldText left="535px" top="62px">프로필 사진</BoldText>
                        <Link><BlueText left="583px" top="106px">프로필 사진 변경</BlueText></Link>
                        <BoldText left="295px" top="172px">비밀번호</BoldText>
                        <Link><BlueText left="321px" top="216px">비밀번호 변경</BlueText></Link>
                        <Line2 top="341px"></Line2>
                        <BoldText left="60px" top="363px">내 리뷰</BoldText>
                        {review_info.length>0?
                        <ContentBox left="54px" top="422px">
                            <ContentTitle>{review_info[0].rev_title}</ContentTitle>
                            <ContentIn>{review_info[0].rev_content}</ContentIn>
                        </ContentBox>
                        :<Msg top='460px'>작성한 리뷰가 없습니다.</Msg>}
                        {review_info.length>1?
                        <ContentBox left="480px" top="422px">
                            <ContentTitle>{review_info[1].rev_title}</ContentTitle>
                            <ContentIn>{review_info[1].rev_content}</ContentIn>
                        </ContentBox>
                        :<></>}
                        <Line2 top="589px"></Line2>
                        <BoldText left="60px" top="611px">내 질문</BoldText>
                        {question_info.length>0?
                        <ContentBox left="54px" top="670px">
                            <ContentTitle>{question_info[0].question_title}</ContentTitle>
                            <ContentIn>{question_info[0].question_content}</ContentIn>
                        </ContentBox>
                        :<Msg top='710px'>작성한 질문이 없습니다.</Msg>}
                        {question_info.length>1?
                        <ContentBox left="480px" top="670px">
                            <ContentTitle>{question_info[1].question_title}</ContentTitle>
                            <ContentIn>{question_info[1].question_content}</ContentIn>
                        </ContentBox>
                        :<></>}
                        <Line2 top="837px"></Line2>
                        <BoldText left="60px" top="856px">다녀온 전시회</BoldText>
                        {ex_info.length>0 ? <Poster src={ex_info[0][0].ex_img} left="72px"></Poster>
                        :<Msg top='968px'>다녀온 전시회가 없습니다.</Msg>}
                        {ex_info.length>1 ? <Poster src={ex_info[1][0].ex_img} left="231px"></Poster>:<></>}
                        {ex_info.length>2 ? <Poster src={ex_info[2][0].ex_img} left="390px"></Poster>:<></>}
                        {ex_info.length>3 ? <Poster src={ex_info[3][0].ex_img} left="550px"></Poster>:<></>}
                        {ex_info.length>4 ? <Poster src={ex_info[4][0].ex_img} left="713px"></Poster>:<></>}
                        <Link><Ellipse><RcmdText>추천 전시회</RcmdText></Ellipse></Link>
                    </Rectangle1>
                </Container>  
        )
    }
    else if(loginState=='docent'){

        const [answer_info, setAnswerInfo] = useState([])
        Axios.post(
            `http://localhost:5000/api/docent/answer`,
             {
                      'id': loginId
               }
              ).then((response) => {
                    if(answer_info.length == 0) setAnswerInfo(response.data)
                }
        );
        
            return(
                <Container>
                    <Line1></Line1>
                    <Rectangle1 height="801px">
                        {ProfileImg!==null? <ProfileImg src={loginProfile}></ProfileImg>
                        :<ProfileImg src={user_profile}></ProfileImg>}
                        <UserNameText>{loginName}</UserNameText>
                        <BoldText left="295px" top="62px">아이디</BoldText>
                        <UserIdText>{loginId}</UserIdText>
                        <BoldText left="535px" top="62px">프로필 사진</BoldText>
                        <Link><BlueText left="583px" top="106px">프로필 사진 변경</BlueText></Link>
                        <BoldText left="295px" top="172px">비밀번호</BoldText>
                        <Link><BlueText left="321px" top="216px">비밀번호 변경</BlueText></Link>                            <BoldText left="558px" top="172px">이메일</BoldText>
                        <Link><BlueText left="583px" top="216px">이메일 추가</BlueText></Link>
                        <Line2 top="341px"></Line2>
                        <BoldText left="60px" top="363px">내 답변</BoldText>
                        {answer_info.length>0?
                        <ContentBox left="54px" top="422px">
                            <ContentTitle>{answer_info[0].answer_title}</ContentTitle>
                            <ContentIn>{answer_info[0].answer_content}</ContentIn>
                        </ContentBox>
                        :<Msg top='460px'>작성한 답변이 없습니다.</Msg>}
                        {answer_info.length>1?
                        <ContentBox left="480px" top="422px">
                            <ContentTitle>{answer_info[1].answer_title}</ContentTitle>
                            <ContentIn>{answer_info[1].answer_content}</ContentIn>
                        </ContentBox>
                        :<></>}
                    </Rectangle1>
                </Container>
            )
    }
}
export default Mypage;