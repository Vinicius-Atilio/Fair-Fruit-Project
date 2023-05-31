import styled from 'styled-components';
import Card from '@material-ui/core/Card';

const titleGray = '#464646';
const blue = '#0096FF';

export const Container = styled(Card)`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 25px;
  width: 100%;
  div {
    align-items: center;
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

export const DetailsContainer = styled(Card)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 25px;
  width: 100%;
`;

export const Header = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 25px;
  width: 100%;
    > div {
        margin-bottom: 10px;
        margin-right: 90px;
        > h2 {
            color: ${titleGray};
            font-size: 15px;
            margin-top: 20px;
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

export const ProductContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 25px;
  width: 100%;
  div {
    align-items: center;
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

export const OrderDetails = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 25px;
  width: 100%;
  margin-top: -9px;
  margin-right: 40px;
`;