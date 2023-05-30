import styled from 'styled-components';
import Card from '@material-ui/core/Card';

const titleGray = '#464646';

export const Container = styled(Card)`
  /* align-items: center; */
  display: flex;
  /* justify-content: space-between; */
  /* padding: 20px; */
  /* width: 100%; */
  div {
    align-items: center;
    display: flex;
    /* gap: 20px; */
    p {
      font-size: 22px;
      font-weight: bold;
      padding: 5px 0 0 5px;
    }
    span {
      font-size: 16px;
    }
    > h2 {
        color: ${titleGray};
        font-size: 5px;
        margin-top: 20px;
    }
  }
`;

export const Details = styled.div`
  padding: 20px;
`;