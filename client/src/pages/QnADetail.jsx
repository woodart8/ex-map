import React from 'react';
import GlobalStyle from '../components/GlobalStyle';
import QnAView from '../components/QnAView';
import MainHeader from '../components/MainHeader'

const QnADetail =  ({...loginUserProps}) => {
  return (
    <div>
      <GlobalStyle />
      <MainHeader {...loginUserProps} />
      <QnAView />
    </div>
  )
}

export default QnADetail;