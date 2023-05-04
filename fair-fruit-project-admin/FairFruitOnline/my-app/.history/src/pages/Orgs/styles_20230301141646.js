import { FormControl, IconButton } from '@material-ui/core';
import styled from 'styled-components';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Card from '@material-ui/core/Card';
const titleGray = '#464646';

export const Container = styled.main`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 20px;
    min-height: 100vh;
    padding: 20px;
    position: relative;
    @media (min-width: 768px) {
        margin: 0 auto;
        width: 50%;
    }
    h2 {
        color: ${titleGray};
        font-size: 32px;
    }
`;

export const CustomCard = styled(Card)`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  width: 70%;
  position: relative; /* make the container a positioned element */
  div {
    align-items: center;
    display: flex;
    gap: 20px;
    flex-wrap: wrap; /* allow the input fields to wrap to the next line */
    p {
      font-size: 22px;
      font-weight: bold;
      padding: 5px 0 0 5px;
    }
    span {
      font-size: 16px;
    }
  }
  /* create a new div for the image */
  .image-container {
    position: absolute;
    bottom: 0;
    left: 50%; /* center the image horizontally */
    transform: translateX(-50%);
  }
  img {
    width: 100px;
    height: 100px;
  }
`;


export const Voltar = styled(IconButton).attrs({
    children: <ArrowBackIcon />,
})`
    left: 20px;
    position: absolute;
    top: 15px;
`;

export const TotalContainer = styled.section`
    margin-top: 20px;
    > div {
        align-items: center;
        display: flex;
        gap: 20px;
        justify-content: space-between;
        h2 {
            color: ${titleGray};
            font-size: 32px;
        }
        span {
            font-size: 30px;
        }
    }
`;

export const PagamentoContainer = styled(FormControl)`
    width: 100%;
`;

export const InputContainer = styled(FormControl)`
    margin-bottom: 30px;
`;

export const Lista = styled.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px 0;
    > h2 {
        color: ${titleGray};
        font-size: 32px;
        margin-top: 20px;
    }
`;
