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
        margin-top: 30px;
    }
  }
`;

export const DividerContainer = styled.div`
  padding: 25px;
  width: 100%;
  margin-top: -30px;
  > hr {
      padding: 25px;
      width: 100%;
    }
`;

export const DetailsContainer = styled(Card)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 25px;
  width: 100%;
  margin-top: -9px;
`;

export const Header = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 21px;
  width: 100%;
  margin-bottom: 10px;
  margin-right: 10px;
  > h2 {
        color: ${titleGray};
        font-size: 15px;
        margin-top: 5px;
        margin-left: 10px;
        margin-right: -20px;
  }
  > h3 {
        color: ${titleGray};
        font-size: 15px;
        margin-top: 5px;
        margin-right: 20px;
  }
  div {
    align-items: center;
    display: flex;
    flex-direction: row;
    margin-right: 32px;
    > h2 {
        color: ${titleGray};
        font-size: 15px;
        margin-top: 5px;
        margin-right: 0px;
        margin-left: 20px;
    }
  }
`;

export const ProductContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 85%;

  div {
    align-items: center;
    display: flex;
    flex-direction: column;
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

export const ImageContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 15px;
  margin-top: -1px;
  width: 0%;
  div {
    > h2 {
        color: ${titleGray};
        font-size: 15px;
        margin-top: 10px;
        margin-left: -10px;
    }
  }
`;

export const FeesDetails = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 25px;
  width: 100%;
  div {
    align-items: center;
    display: flex;
    flex-direction: row;
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
  justify-content: space-between;
  padding: 25px;
  width: 100%;
  div {
    align-items: center;
    display: flex;
    flex-direction: row;
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