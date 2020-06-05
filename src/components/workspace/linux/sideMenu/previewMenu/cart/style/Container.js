import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    user-select: none;
    width: 100%;
    height: 100%;
    padding: 0.5rem;

    .empty-cart {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;

        .icon {
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            width: 2.5rem;
            background: ${(props) => props.theme.material.accent.main};
            transition: background 0.2s ease-in-out;
            border-top-right-radius: 0 0;
            border-bottom-right-radius: 37% 100%;
        }
    }

    .products-container {
        flex: 1;
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

            .icon {
                display: flex;
                justify-content: center;
                align-items: center;
                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;
                width: 2.5rem;
                background: ${(props) => props.theme.material.accent.main};
                transition: background 0.2s ease-in-out;
                border-top-right-radius: 0 0;
                border-bottom-right-radius: 37% 100%;
            }
        }
    }

    .heading-name {
        height: 7rem;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: default;
    }
`;
