import React from 'react'
import { Container } from './styles'

const ApiErrorMessage = ({error}) => {
    console.log(error);
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

export default ApiErrorMessage;