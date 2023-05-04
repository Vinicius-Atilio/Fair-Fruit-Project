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

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  margin-left: 10px;
  margin-top: -10px;
  margin-bottom: 30px;
  width: 50em; /* set width to 100% */

  @media (min-width: 768px) {
    margin-top: -10px;
    margin-bottom: 30px;
    margin-top: -10px;
  }
`;

export const InputForm = styled(FormControl)`
    margin-bottom: 30px;
    width: 22em; /* set width to 100% */
`;

export const ExtraInputForm = styled(FormControl)`
    margin-bottom: 30px;
    width: 22em; /* set width to 100% */
`;