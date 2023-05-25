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