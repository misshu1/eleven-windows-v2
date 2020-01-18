import styled from 'styled-components';

export const Box = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;

    .buttons-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        button {
            margin: 0.5rem 0;
        }
    }
`;
