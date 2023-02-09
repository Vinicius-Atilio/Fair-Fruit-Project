import styled from 'styled-components';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { IconButton } from '@material-ui/core';
import Card from '@material-ui/core/Card';

const titleGray = '#464646';

export const Container = styled.main`
    min-height: 100vh;
    padding: 0 20px;

    @media (min-width: 768px) {
        margin: 0 auto;
        width: 50%;
    }
`;

export const Header = styled.header`
    > div {
        align-items: center;
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
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
    flex-direction: column;
    gap: 10px;
    padding: 5px 0;
    > h2 {
        color: ${titleGray};
        font-size: 32px;
        margin-top: 20px;
    }
`;

export const CustomCard = styled(Card)`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  width: 100%;
  div {
    align-items: center;
    display: flex;
    gap: 20px;
    p {
      font-size: 22px;
      font-weight: bold;
      padding: 5px 0 0 5px;
    }
    span {
      font-size: 16px;
    }
  }
`;

export const Voltar = styled(IconButton).attrs({
    children: <ArrowBackIcon />,
})`
    left: 20px;
    position: absolute;
    top: 15px;
`;
