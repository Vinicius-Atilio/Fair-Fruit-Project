import React from 'react'
import { Container } from './styles'

export default function ApiErrorMessage(msg) {
  return (
    <Container>
        <p>{msg}</p>
    </Container>
  )
}
