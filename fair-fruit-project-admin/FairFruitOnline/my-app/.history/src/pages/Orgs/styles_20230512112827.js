import { FormControl, IconButton } from '@material-ui/core';
import styled from 'styled-components';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Card from '@material-ui/core/Card';
const titleGray = '#464646';

export const Container = styled.main`
    align-items: center;
    display: flex;
    justify-content: flex-start;
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

export const InputContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const ProductsContainer = styled(Card)`
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

export const ImageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Image = styled.img`
    height: 100%;
    justify-content: flex-start;
`;

export const CustomCard = styled(Card)`
  align-items: center;
  display: flex;
  /* justify-content: space-between; */
  padding: 30px;
  width: 100%;
  position: relative; /* make the container a positioned element */
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

export const StyledForm = styled.form`
`;

export const InputForm = styled(FormControl)`
    display: flex;
    justify-content: flex-start;
    margin-bottom: 30px;
    width: 20em;
`;