import React from 'react'
import GlobalStyle from '../components/GlobalStyle';
import Editor from '../components/Editor'
import MainHeader from '../components/MainHeader'

const AnswerEditorPage = ({...loginUserProps}) => {
  const obj = {
    editorState: 'answer',
    userId: loginUserProps.loginId
  }

    return (
        <div>
            <GlobalStyle />
            <MainHeader {...loginUserProps} />
            <Editor {...obj} />
        </div>
    )
}

export default AnswerEditorPage;