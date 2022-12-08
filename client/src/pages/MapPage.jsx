import React from 'react'
import GlobalStyle from '../components/GlobalStyle';
import Map from '../components/Map'
import MainHeader from '../components/MainHeader'
import GrayBackground from '../components/GrayBackground';

const MapPage = ({...loginUserProps}) => {
    return (
        <div>
            <GrayBackground />
            <MainHeader {...loginUserProps} />
            <Map />
        </div>
    )
}

export default MapPage;