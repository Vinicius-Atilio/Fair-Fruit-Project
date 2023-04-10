import styled from 'styled-components';
const titleGray = '#464646';

export const Container = styled.main`
    align-items: flex-start; /* change from 'flex' to 'flex-start' */
    display: flex;
    flex-direction: column; /* change from 'initial' to 'column' to stack the elements vertically */
    gap: 20px;
    min-height: 100vh;
    padding: 20px;
    position: relative;
    @media (min-width: 768px) {
        margin: 0 auto;
        width: 50%;
    }
`;