import styled from 'styled-components';
import FormControl from '@material-ui/core/FormControl';
import { Button } from '@material-ui/core';

export const Image = styled.img`
    max-width: 100%;
`;

// export const ImageContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: flex-start;
// `
// export const SignInContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: flex-end;
// `
export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
`;

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 2;
`;


export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0px;
  min-height: 100vh;

  @media (min-width: 768px) {
    display: flex;
    margin: 0 auto;
    margin-top: -150px;
    width: 100%;
    justify-content: flex-start;
  }

  @media (max-width: 767px) {
    display: flex;
    margin-right: -100;
    align-items: center;
    & > *:first-child {
      margin-right: -100;
      margin-bottom: 20px;
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
    margin-left: 200px;
    margin-bottom: 500px;
`;


export const StyledButton = styled(Button)`
  margin-top: 20px;
`;
