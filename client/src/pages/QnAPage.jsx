import React from 'react';
import GlobalStyle from '../components/GlobalStyle';
import QnAList from '../components/QnAList';
import MainHeader from '../components/MainHeader'

const QnAPage =  ({...loginUserProps}) => {
  return (
    <div>
      <GlobalStyle />
      <MainHeader {...loginUserProps} />
      <QnAList />
    </div>
  )
}

export default QnAPage;