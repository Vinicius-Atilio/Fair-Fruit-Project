import React from 'react'
import { Container } from './styles'

export default function ApiErrorMessage({error}) {
    if (!error) {
        console.log('isNull');
        return null;
    }

    const msg = error;
    console.log(msg);

    return (
    <Container>
        <p>{msg}</p>
    </Container>
    )
}
