import React from 'react'
import { Container } from './styles'

export default function ApiErrorMessage(error) {
  return (
    <Container>
        <p>{error}</p>
    </Container>
  )
}
