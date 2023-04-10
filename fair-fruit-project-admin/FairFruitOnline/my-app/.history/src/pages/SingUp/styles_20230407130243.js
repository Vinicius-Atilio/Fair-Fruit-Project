import styled from 'styled-components';
import FormControl from '@material-ui/core/FormControl';
import { Button } from '@material-ui/core';

export const Image = styled.img`
  max-width: 100%;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    justify-content: flex-end;

    @media (min-width: 768px) {
        margin: 0 auto;
        width: 60%;
    }
`;

export const Title = styled.h2`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    margin-top: 10px;
`;

export const InputContainer = styled(FormControl)`
    margin-bottom: 30px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    margin-top: 150px;
`;

export const StyledButton = styled(Button)`
  margin-top: 20px;
`;
