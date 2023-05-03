import React from 'react'
import { Container } from './styles'

export default function ApiErrorMessage(error) {
    if (!error) {
        return null;
    }
    
    return (
    <Container>
        <p>{error}</p>
    </Container>
    )
}
