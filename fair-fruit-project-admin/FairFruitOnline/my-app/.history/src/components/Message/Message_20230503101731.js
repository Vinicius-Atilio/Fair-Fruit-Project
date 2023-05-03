import React from 'react'
import { Container } from './styles'

const Message = ({msg, type}) => {
  return (
    <Container>
        <p>{msg}</p>
    </Container>
  )
}

export default Message;
