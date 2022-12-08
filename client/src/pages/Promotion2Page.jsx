import React from 'react';
import GrayBackground from '../components/GrayBackground';
import Promotion2 from '../components/Promotion2';
import MainHeader from '../components/MainHeader'

const Promotion2Page =  ({...loginUserProps}) => {
  return (
    <div>
      <GrayBackground />
      <MainHeader {...loginUserProps} />
      <Promotion2 />
    </div>
  )
}
export default Promotion2Page;