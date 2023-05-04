import React from 'react'
import { Container } from './styles'
import WarningIcon from '@mui/icons-material/Warning';

export default function ApiErrorMessage({error}) {

    if (!error) {
        return null;
    }

    return (
        <Container>
            <WarningIcon/>
            <p>{error}</p>
        </Container>
    )
}
