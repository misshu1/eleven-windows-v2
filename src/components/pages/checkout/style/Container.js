import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;

    .container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 30rem;
        user-select: none;
    }

    .products-container {
        position: absolute;
        width: 100%;
        min-height: 100%;
    }

    .empty-cart {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
    }

    /* .left,
    .right {
        width: 100%;
        height: 100%;
    } */
`;
