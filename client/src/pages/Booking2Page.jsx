import React from 'react'
import GlobalStyle from '../components/GlobalStyle'
import Booking2 from '../components/Booking2'
import MainHeader from '../components/MainHeader'
const Booking2Page = ({...loginUserProps}) => {
    return (
        <div>
            <GlobalStyle />
            <MainHeader {...loginUserProps} />
            <Booking2 {...loginUserProps}/>
        </div>
    )
}

export default Booking2Page;