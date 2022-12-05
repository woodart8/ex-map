import React from 'react'
import GlobalStyle from '../components/GlobalStyle'
import Mypage from '../components/Mypage'
import MainHeader from '../components/MainHeader'
const MypagePage = ({...loginUserProps}) => {
    return (
        <div>
            <GlobalStyle />
            <MainHeader {...loginUserProps} />
            <Mypage {...loginUserProps} />
        </div>
    )
}

export default MypagePage;