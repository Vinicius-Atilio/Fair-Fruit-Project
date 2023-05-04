import styled from 'styled-components';
import FormControl from '@material-ui/core/FormControl';
import { Button } from '@material-ui/core';

export const Image = styled.img`
    max-width: 100%;
    height: auto;
`;

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SignInContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
`;

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0px;

  @media (min-width: 768px) {
    width: 80%;
    max-width: 12000px;
  }
`;

export const Title = styled.h2`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  margin-top: -250px;
  justify-content: flex-end;
`;

export const InputContainer = styled(FormControl)`
  margin-bottom: 30px;
`;

export const CustomIcon = styled.div`
  display: flex;
  margin-bottom: 100px;
`;

export const StyledButton = styled(Button)`
  margin-top: 20px;
`;
