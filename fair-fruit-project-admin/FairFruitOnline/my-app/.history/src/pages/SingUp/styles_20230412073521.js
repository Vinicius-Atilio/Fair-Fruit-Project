import styled from 'styled-components';
import FormControl from '@material-ui/core/FormControl';
import { Button } from '@material-ui/core';

export const Image = styled.img`
    max-width: 100%;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0px;
  min-height: 100vh;

  @media (min-width: 768px) {
    display: flex;
    margin: 0 auto;
    margin-top: 0px;
    width: 30%;
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
  h2 {
    font-size: 32px;
  }

  & > *:first-child {
    margin-right: 20px;
  }

`;

export const Title = styled.h2`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 200px;
    margin-top: -180px;
    justify-content: flex-end;
    position: absolute;
    right: 305px;
`;

export const InputContainer = styled(FormControl)`
    margin-bottom: 30px;
`;

export const CustomIcon = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    margin-left: 20px;
    margin-bottom: 500px;

    .MuiSvgIcon-root {
    position: absolute;
    right: 350px;
  }
`;


export const StyledButton = styled(Button)`
  margin-top: 20px;
`;
