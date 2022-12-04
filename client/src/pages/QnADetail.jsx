import React from 'react';
import GrayBackground from '../components/GrayBackground';
import QnAView from '../components/QnAView';
import MainHeader from '../components/MainHeader'

const QnADetail =  ({...loginUserProps}) => {
  return (
    <div>
      <GrayBackground />
      <MainHeader {...loginUserProps} />
      <QnAView {...loginUserProps} />
    </div>
  )
}

export default QnADetail;