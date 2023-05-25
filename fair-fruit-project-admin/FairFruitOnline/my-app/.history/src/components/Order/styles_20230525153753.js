import styled from 'styled-components';
import Card from '@material-ui/core/Card';

const titleGray = '#464646';

export const Container = styled(Card)`
  /* align-items: center; */
  display: flex;
  /* justify-content: space-between; */
  /* padding: 20px; */
  /* width: 100%; */
`;

export const Info = styled.div`
  padding: 20px;
  > h2 {
        color: ${titleGray};
        font-size: 15px;
        margin-top: 5px;
    }
`;

export const Details = styled.div`
    align-items: end;
    display: flex;
    margin-bottom: 10px;
    justify-content: space-between;
    > div {
        align-items: baseline;
        display: flex;
        justify-content: flex-end;
        margin-top: 20px;
        > h2 {
            color: ${titleGray};
            font-size: 25px;
            margin-top: 20px;
            justify-content: flex-end;
        }
        > h3 {
            color: ${titleGray};
            font-size: 26px;
        }
    }
    > p {
        color: #a3a3a3;
        font-size: 26px;
    }
`;