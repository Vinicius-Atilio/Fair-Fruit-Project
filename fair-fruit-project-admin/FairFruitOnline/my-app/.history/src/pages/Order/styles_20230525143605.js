import { FormControl, IconButton } from '@material-ui/core';
import styled from 'styled-components';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Card from '@material-ui/core/Card';


const titleGray = '#464646';

export const Container = styled.main`
    min-height: 100vh;
    padding: 0 20px;

    @media (min-width: 768px) {
        margin: 0 auto;
        width: 40%;
    }
`;

export const List = styled.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 5px 0;
    > h2 {
        color: ${titleGray};
        font-size: 32px;
        margin-top: 20px;
    }
`;

export const Back = styled(IconButton).attrs({
    children: <ArrowBackIcon />,
})`
    left: 20px;
    position: absolute;
    top: 15px;
`;