import styled from 'styled-components';
import FormControl from '@material-ui/core/FormControl';
import { Button } from '@material-ui/core';

export const Image = styled.img`
    max-width: 100%;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0px;
  min-height: 100vh;

  @media (min-width: 768px) {
    margin: 0 auto;
    margin-top: 0px;
    width: 100%;
  }

  h2 {
    font-size: 32px;
  }

  & > *:first-child {
    margin-right: 20px;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
    justify-content: flex-end;
    align-items: center;
    & > *:first-child {
      margin-right: 0;
      margin-bottom: 20px;
    }
  }
`;

export const Title = styled.h2`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 200px;
`;

export const InputContainer = styled(FormControl)`
    margin-bottom: 30px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-left: 20px;
    margin-bottom: 400px;

    .MuiSvgIcon-root {
    position: absolute;
    right: 10px;
  }
`;


export const StyledButton = styled(Button)`
  margin-top: 20px;
`;
