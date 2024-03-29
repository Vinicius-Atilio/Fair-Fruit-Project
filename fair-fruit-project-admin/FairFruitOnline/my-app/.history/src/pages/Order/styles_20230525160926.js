import { FormControl, IconButton } from '@material-ui/core';
import styled from 'styled-components';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const titleGray = '#464646';

export const Container = styled.main`
    min-height: 100vh;
    padding: 0 20px;

    @media (min-width: 768px) {
        margin: 0 auto;
        width: 40%;
    }
`;

export const Header = styled.header`
    > div {
        align-items: baseline;
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        margin-right: 400px;
        > h2 {
            color: ${titleGray};
            font-size: 32px;
            margin-top: 20px;
        }
        > h3 {
            color: ${titleGray};
            font-size: 26px;
        }
    }
    > p {
        color: #a3a3a3;
        font-size: 26px;
    }
`;

export const List = styled.section`
    display: flex;
    flex-direction: column-reverse;
    gap: 10px;
    padding: 5px 0;
    margin-top: 20px;
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