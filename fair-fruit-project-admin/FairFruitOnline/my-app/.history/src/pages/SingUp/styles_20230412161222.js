import styled from 'styled-components';
import FormControl from '@material-ui/core/FormControl';
import { Button } from '@material-ui/core';

export const Image = styled.img`
    max-width: 67.375em;
    max-height: 67.375em;
`;

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 50em; /* set width to 50% */
  margin-bottom: 20px; /* add some margin at the bottom */

  @media (min-width: 768px) {
    height: 60em; /* set height to 60em */
    width: 50em; /* set width to 50em */
  }
`;

export const SignInContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100em; /* add max-width property */
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -10px;
  margin-bottom: 30px;
  width: 50em; /* set width to 100% */
  margin-left: 1200;
  margin-right: 100;
`;

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 50px; /* add some padding */
  height: auto; /* set height to auto */
  margin: 100px; /* remove margins */
  margin-left: 120px;
  margin-right: 150px;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    height: 60em; /* set height to 60em */
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
`;

export const StyledButton = styled(Button)`
  margin-top: 20px;
`;
