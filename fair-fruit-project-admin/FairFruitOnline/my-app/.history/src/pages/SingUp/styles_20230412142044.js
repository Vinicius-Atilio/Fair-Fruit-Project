import styled from 'styled-components';
import FormControl from '@material-ui/core/FormControl';
import { Button } from '@material-ui/core';

export const Image = styled.img`
    max-width: 200%;
`;

export const ImageContainer = styled.div`
  flex: 1;
  width: 50%; /* adjust width */
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
  margin-left: 600px; /* add margin to the left */
`;

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0px;
  height: 100%;
  margin-left: 200px; /* adjust margin */
  margin-right: 150px; /* adjust margin */

  @media (min-width: 768px) {
    justify-content: flex-start;
    width: 80%;
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

export const InputContainer = styled(FormControl)`
    margin-bottom: 30px;
`;

export const CustomIcon = styled.div`
    display: flex;
    margin-bottom: 300px;
`;


export const StyledButton = styled(Button)`
  margin-top: 20px;
`;
