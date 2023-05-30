import { FormControl, IconButton } from '@material-ui/core';
import styled from 'styled-components';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Card from '@material-ui/core/Card';
const titleGray = '#464646';

export const Container = styled.main`
`;

export const List = styled.section`
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

export const Back = styled(IconButton).attrs({
    children: <ArrowBackIcon />,
})`
    left: 20px;
    position: absolute;
    top: 15px;
`;