import styled from 'styled-components';
import FormControl from '@material-ui/core/FormControl';
import { Button } from '@material-ui/core';

export const Image = styled.img`
    max-width: 67.375em;
    max-height: 67.375em;
`;

export const ImageContainer = styled.div`
  flex: 1;
  width: 50em;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 767px) {
    height: 50%;
  }
`;

export const SignInContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 400px; /* add margin to the left */
  width: 30em;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -120px;
    margin-bottom: 30px;
    width: 30em; /* add width */
    margin-left: auto; /* center horizontally */
    margin-right: auto; /* center horizontally */
`;

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0px;
  height: 100%;
  margin-left: 120px; /* adjust margin */
  margin-right: 150px; /* adjust margin */
  margin-top: 0px;

  @media (min-width: 768px) {
    justify-content: flex-start;
    width: 40em;
  }

  @media (max-width: 767px) {
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
    & > *:first-child {
      margin-right: 0;
    }
  }
`;

export const Title = styled.h2`
    display: flex;
    flex-direction: column;
    margin-bottom: 200px;
    margin-top: -250px;
    justify-content: flex-end;
`;

export const InputForm = styled(FormControl)`
    margin-bottom: 30px;
    width: 500px;
`;

export const CustomIcon = styled.div`
    display: flex;
    margin-bottom: 300px;
`;


export const StyledButton = styled(Button)`
  margin-top: 20px;
`;
