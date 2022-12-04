import React from 'react';
import GrayBackground from '../components/GrayBackground';
import QnAList from '../components/QnAList';
import MainHeader from '../components/MainHeader'

const QnAPage =  ({...loginUserProps}) => {
  return (
    <div>
      <GrayBackground />
      <MainHeader {...loginUserProps} />
      <QnAList />
    </div>
  )
}

export default QnAPage;