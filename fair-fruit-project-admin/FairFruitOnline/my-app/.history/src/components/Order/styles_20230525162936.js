import styled from 'styled-components';
import Card from '@material-ui/core/Card';

const titleGray = '#464646';
const blue = '#0096FF';

export const Container = styled(Card)`
  /* align-items: center; */
  display: flex;
  /* justify-content: space-between; */
  /* padding: 20px; */
  /* width: 100%; */
`;

export const Info = styled.main`
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
    margin-left: 400px;
    > div {
        align-items: end;
        display: flex;
        justify-content: flex-end;
        > h2 {
            color: ${blue};
            font-size: 15px;
            margin-top: 20px;
            justify-content: flex-end;
        }
    }
    > p {
        color: #a3a3a3;
        font-size: 26px;
    }
    > h2 {
        color: ${blue};
        font-size: 15px;
        margin-top: 5px;
    }
`;