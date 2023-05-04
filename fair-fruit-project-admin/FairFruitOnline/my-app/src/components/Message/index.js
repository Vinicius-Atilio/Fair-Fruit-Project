import React from 'react'
import { Container, CustomIcon } from './styles'
import WarningIcon from '@mui/icons-material/Warning';

export default function ApiErrorMessage({error}) {

    if (!error) {
        return null;
    }

    return (
        <Container>
            <CustomIcon>
                <WarningIcon/>
            </CustomIcon>
            <p>{error}</p>
        </Container>
    )
}
