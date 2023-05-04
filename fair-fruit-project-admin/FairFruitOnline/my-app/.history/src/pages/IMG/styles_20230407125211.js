import styled from 'styled-components';
const titleGray = '#464646';

export const Container = styled.main`
    align-items: flex;
    display: flex;
    flex-direction: row;
    gap: 20px;
    min-height: 100vh;
    padding: 20px;
    position: relative;
    @media (min-width: 768px) {
        margin: 0 auto;
        width: 50%;
    }
    h2 {
        color: ${titleGray};
        font-size: 32px;
    }
`;