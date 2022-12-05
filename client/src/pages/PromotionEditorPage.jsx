import React from 'react'
import GrayBackground from '../components/GrayBackground';
import Editor from '../components/Editor'
import MainHeader from '../components/MainHeader'

const PromotionEditorPage = ({...loginUserProps}) => {
  const obj = {
    editorState: 'promotion',
    userId: loginUserProps.loginId
  }
    return (
        <div>
            <GrayBackground />
            <MainHeader {...loginUserProps} />
            <Editor {...obj} />
        </div>
    )
}

export default PromotionEditorPage;