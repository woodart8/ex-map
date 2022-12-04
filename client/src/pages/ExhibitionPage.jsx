import React from 'react';
import GrayBackground from '../components/GrayBackground';
import Exhibition from '../components/Exhibition';
import MainHeader from '../components/MainHeader'

const ExhibitionPage =  ({...loginUserProps}) => {
  return (
    <div>
      <GrayBackground />
      <MainHeader {...loginUserProps} />
      <Exhibition />
    </div>
  )
}

export default ExhibitionPage;