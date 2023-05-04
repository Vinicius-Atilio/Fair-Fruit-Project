import styled from 'styled-components';
import FormControl from '@material-ui/core/FormControl';

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0 20px;

    @media (min-width: 768px) {
        justify-content: center;
        padding: 0px; /* remove padding */
        margin: 0px 0px; /* add some margin */
        height: 60em; /* set height to 60em */
  }
`;

export const Title = styled.h2`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 200px; /* reduce margin */
  margin-top: 150px; /* remove margin */
  
  @media (min-width: 768px) {
    margin-bottom: 50px; /* add some margin */
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 10px;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin-top: -10px;
  width: 60em; /* set width to 100% */

  @media (min-width: 768px) {
    margin-top: -10px;
    margin-bottom: 30px;
    margin-top: -10px;
  }
`;

export const InputForm = styled(FormControl)`
    margin-bottom: -10px;
    width: 28em; /* set width to 100% */
`;

export const ExtraInputForm = styled(FormControl)`
    margin-bottom: -10px;
    width: 60em; /* set width to 100% */
`;

export const StyledForm = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const CustomIcon = styled.div`
    display: flex;
    margin-bottom: -80px;
    svg {
        font-size: 3rem;
    }
`;