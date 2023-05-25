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