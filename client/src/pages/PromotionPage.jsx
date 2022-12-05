import React from 'react'
import GrayBackground from '../components/GrayBackground';
import MainHeader from '../components/MainHeader'
import Promotion from '../components/Promotion';

const PromotionPage = ({...loginUserProps}) => {
    return (
        <div>
            <GrayBackground />
            <MainHeader {...loginUserProps} />
            <Promotion />
        </div>
    )
}

export default PromotionPage;