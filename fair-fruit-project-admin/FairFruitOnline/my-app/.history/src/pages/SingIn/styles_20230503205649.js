import styled from 'styled-components';
import FormControl from '@material-ui/core/FormControl';
import { Button } from '@material-ui/core';

export const Container = styled.main`
  display: flex;
  align-items: center;
  height: 100%; /* set height to auto */
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media (min-width: 1536px) {
    }
`;

export const FormLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media (min-width: 1536px) {
    }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -10px;
  margin-bottom: 30px;
  width: 50em; /* set width to 100% */

  @media (min-width: 768px) {
    margin-top: -10px;
    margin-bottom: 30px;
    margin-top: -10px;
  }
`;

export const Image = styled.img`
    width: 50%;
    height: 100%;
    @media (max-width: 1724) {
      width: 500px;
      
    }
`;


export const Title = styled.h2`
  display: flex;
  flex-direction: column;
  margin-bottom: 200px; /* reduce margin */
  margin-top: 150px; /* remove margin */
  
  @media (min-width: 768px) {
    margin-bottom: 50px; /* add some margin */
  }
`;

export const InputForm = styled(FormControl)`
    margin-bottom: 30px;
    width: 50em; /* set width to 100% */
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

export const StyledButton = styled(Button)`
  margin-top: 20px;
`;

export const StyledForm = styled.form`
`;
