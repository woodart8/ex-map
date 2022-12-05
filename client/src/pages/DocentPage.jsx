import React from 'react'
import GrayBackground from '../components/GrayBackground'
import Docent from '../components/Docent'
import MainHeader from '../components/MainHeader'
const DocentPage = ({...loginUserProps}) => {
    return (
        <div>
            <GrayBackground />
            <MainHeader {...loginUserProps} />
            <Docent />
        </div>
    )
}

export default DocentPage;