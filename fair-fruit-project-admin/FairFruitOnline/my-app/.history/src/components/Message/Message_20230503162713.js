import React from 'react'
import { Container } from './styles'

export default function ApiErrorMessage(error) {
    if (!error) {
        return null;
    }

    const msg = error;

    return (
    <Container>
        <p>{msg}</p>
    </Container>
    )
}
