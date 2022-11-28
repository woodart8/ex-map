import React from 'react'
import GlobalStyle from '../components/GlobalStyle';
import MainHeader from '../components/MainHeader'
import Promotion from '../components/Promotion';

const PromotionPage = ({...loginUserProps}) => {
    return (
        <div>
            <GlobalStyle />
            <MainHeader {...loginUserProps} />
            <Promotion />
        </div>
    )
}

export default PromotionPage;