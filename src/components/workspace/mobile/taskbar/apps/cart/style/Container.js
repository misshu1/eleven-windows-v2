import styled, { keyframes } from 'styled-components';

const slideUp = keyframes`
0% {
    opacity: 0;
    transform: translate3d(0, 10%, 0);
}
100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
}
`;

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    z-index: 250;
    position: absolute;
    user-select: none;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: ${(props) => props.theme.calendarBg};
    width: 100%;
    height: 100%;
    color: ${(props) => props.theme.startMenuColor};
    animation: ${slideUp} 0.4s ease-out 1 forwards;
    padding: 0.5rem;
    backdrop-filter: blur(4px);

    .empty-cart {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;

        a {
            display: inline-block;
            text-decoration: none;
            position: relative;
            overflow: hidden;
            padding-left: 3rem;
            cursor: default;
            font-weight: 500;
            line-height: 1.75;
            border-radius: 4px;
            letter-spacing: 0.02857em;
            text-transform: uppercase;
            background: ${(props) => props.theme.material.primary.main};
            color: ${(props) => props.theme.material.primary.contrast.darker};

            .btn-text {
                display: inline-block;
                padding: 6px 8px;
            }
        }

        a:hover {
            background: ${(props) => props.theme.material.primary.darker};
        }

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
`;
