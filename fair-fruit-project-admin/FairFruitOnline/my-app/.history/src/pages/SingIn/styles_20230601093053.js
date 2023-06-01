import styled from 'styled-components';
import FormControl from '@material-ui/core/FormControl';
import { Button } from '@material-ui/core';

export const Container = styled.main`
  display: flex;
  align-items: center;
  height: 100vh;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* overflow: hidden; */

  @media (max-width: 2015px) {
        width: 900px;
    }
    @media (max-width: 1815px) {
        width: 800px;
    }
    @media (max-width: 1700px) {
        width: 700px;
    }
    @media (max-width: 1600px) {
        width: 600px;
    }
    @media (max-width: 1400px) {
        width: 500px;
    }

    @media (max-width: 1400px) {
        width: 400px;
    }
`;

export const FormLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media (max-width: 1300px) {
    width: 300px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -10px;
  margin-bottom: 30px;
  @media (min-width: 768px) {
    margin-top: -10px;
    margin-bottom: 30px;
    margin-top: -10px;
  }
`;

export const Image = styled.img`
    height: 100%;
    justify-content: flex-start;
`;


export const Title = styled.h2`
  display: flex;
  flex-direction: column;
  margin-bottom: 200px;
  margin-top: 150px;
  
  @media (min-width: 768px) {
    margin-bottom: 50px;
  }
`;

export const InputForm = styled(FormControl)`
    display: flex;
    margin-bottom: 30px;
    width: 50em;
`;

export const CustomIcon = styled.div`
    display: flex;
    margin-bottom: -80px;
    svg {
        font-size: 3rem;
    }
`;

export const Messages = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    line-height: 25px;
`
export const ErrorContainer = styled.div`
    display: flex;
    justify-content: center;
  `
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const StyledButton = styled(Button)`
  display: flex;
  margin-top: 20px;
`;

export const StyledForm = styled.form`
`;
