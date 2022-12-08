import React from 'react';
import GrayBackground from '../components/GrayBackground';
import Booking from '../components/Booking';
import MainHeader from '../components/MainHeader'

const BookingPage =  ({...loginUserProps}) => {
  return (
    <div>
      <GrayBackground />
      <MainHeader {...loginUserProps} />
      <Booking {...loginUserProps} />
    </div>
  )
}
export default BookingPage;