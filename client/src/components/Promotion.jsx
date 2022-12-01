import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

function Promotion() {
  const navigate = useNavigate()

  const click = () => {
    navigate('/promotion/post')
  }

  return (
    <button onClick={click}>홍보 작성</button>
  )
}

export default Promotion;