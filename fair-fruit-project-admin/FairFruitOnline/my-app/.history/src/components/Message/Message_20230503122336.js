import React from 'react'
import { Container } from './styles'

export default function ApiErrorMessage(msg, type) {
  return (
    <Container>
        <p>{msg}</p>
    </Container>
  )
}
