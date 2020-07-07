import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    user-select: none;
    width: 100%;
    height: 100%;

    .empty-cart {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
    }

    .products-container {
        position: absolute;
        width: 100%;
        min-height: 100%;
    }

    .checkout-container {
        display: flex;
        align-items: center;
        height: fit-content;
        border-top: 1px solid ${(props) => props.theme.startMenuBorder};
        padding: 1rem;

        .checkout-total {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-right: 1rem;

            h3 {
                margin: 0;
            }

            .checkout-value {
                font-size: 1.5rem;
                margin-top: 0.2rem;
            }
        }

        .checkout-btn {
            flex: 1;
        }
    }
`;
