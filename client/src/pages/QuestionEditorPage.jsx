import React from 'react'
import GlobalStyle from '../components/GlobalStyle';
import Editor from '../components/Editor'
import MainHeader from '../components/MainHeader'

const QuestionEditorPage = ({...loginUserProps}) => {
  const obj = {
    editorState: 'question',
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

export default QuestionEditorPage;