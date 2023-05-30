import styled from 'styled-components';
import Card from '@material-ui/core/Card';

const titleGray = '#464646';
const blue = '#0096FF';

export const Container = styled(Card)`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  width: 100%;
  div {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 5px;
    > h2 {
        color: ${titleGray};
        font-size: 15px;
        margin-top: 5px;
    }
    > h3 {
        color: ${blue};
        font-size: 15px;
        margin-top: 5px;
    }
  }
`;

export const Info = styled.div`
  padding: 20px;
  > div {
        align-items: end;
        display: flex;
        justify-content: flex-start;
    }
  > h2 {
        color: ${titleGray};
        font-size: 15px;
        margin-top: 5px;
    }
    > h3 {
        color: ${blue};
        font-size: 15px;
        margin-top: 5px;
    }
`;

export const Details = styled.div`
    align-items: center;
    display: flex;
    > h2 {
        align-items: end;
        color: ${blue};
        font-size: 15px;
        margin-top: 5px;
        margin-left: 80px;
    }
`;