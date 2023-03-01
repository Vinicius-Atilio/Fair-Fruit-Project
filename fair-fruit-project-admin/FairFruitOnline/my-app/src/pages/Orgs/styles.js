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
  flex-direction: column;
  /* justify-content: space-between; */
  padding: 30px;
  width: 100%;
  position: relative; /* make the container a positioned element */
  div {
    /* align-items: center; */
    display: flex;
    gap: 20px;
    margin-left: 3.5%;
    flex-wrap: wrap; /* allow the input fields to wrap to the next line */
    p {
      font-size: 22px;
      font-weight: bold;
      padding: 5px 0 0 5px;
    }
    span {
      font-size: 16px;
    }
    /* create a new div for the image */
    .image-container {
        margin-top: -135px;
        margin-left: 70%;
        bottom: 0;
        transform: translateX(-50%);
    }
    img {
        justify-content: space-between;
        margin-top: 10px;
        width: 200px;
        height: auto;
    }
    Button {
        justify-content: flex-end;
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
