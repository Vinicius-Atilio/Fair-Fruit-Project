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

export const Info = styled.div`
  padding: 20px;
  > div {
        align-items: end;
        display: flex;
        justify-content: flex-end;
        > h2 {
            color: ${titleGray};
            font-size: 5px;
            margin-top: 20px;
            justify-content: flex-end;
        }
    }
    > p {
        color: #a3a3a3;
        font-size: 26px;
    }
`;

export const Details = styled.div`
    align-items: end;
    display: flex;
    margin-bottom: 10px;
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
`;