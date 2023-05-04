import styled from 'styled-components';
import FormControl from '@material-ui/core/FormControl';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 20px;

    @media (min-width: 768px) {
        margin: 0 auto;
        width: 60%;
    }
`;

export const Title = styled.h2`
    margin-bottom: 20px;
    margin-top: 50px;
`;

export const InputContainer = styled(FormControl)`
    margin-bottom: 30px;
`;

export const Form = styled.form`
  display: flex;
  justify-content: left;
  margin-top: 10px;
  padding: -100px;
  background-color: #f5f5f5;
`;