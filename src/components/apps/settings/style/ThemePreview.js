import styled, { css } from 'styled-components';

export const ThemePreview = styled.div`
    position: relative;
    width: 15rem;
    height: 8rem;
    background: ${(props) => props.background};
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    margin: 0.5rem 0;
    box-shadow: 0px 0px 4px -1px rgba(0, 0, 0, 0.2),
        0px 0px 5px 0px rgba(0, 0, 0, 0.14),
        0px 0px 10px 0px rgba(0, 0, 0, 0.12);

    ${(props) =>
        props.isVideoEnabledOnDesktop &&
        css`
            background: url(${props.getSelectedVideoPreview});
            background-size: 100% 100%;
        `}

    .calculator {
        position: absolute;
        display: flex;
        flex-direction: column;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 2.5rem;
        height: 5rem;
        background-color: var(--background);
        transition: background 0.2s ease-in-out;
        font-size: 0.15rem;

        .calculator-title {
            flex: 1;

            .folder-name {
                display: block;
                height: 0.3rem;
                background: var(--backgroundLight);
                transition: background 0.2s ease-in-out;
            }
        }

        .buttons {
            display: grid;
            grid-template-rows: repeat(4, minmax(0.7rem, 1fr));
            grid-template-columns: repeat(4, 1fr);
            grid-gap: 1px;

            span {
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: var(--backgroundCard);
                transition: background 0.2s ease-in-out;
            }
            span:last-child {
                color: #fff;
                background-color: var(--primary);
                transition: background 0.2s ease-in-out;
            }
        }
    }

    .taskbar {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 0.5rem;
        background: var(--backgroundLight);
        transition: background 0.2s ease-in-out;

        .left {
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            left: 0;
            top: 50%;
            transform: translate(0, -50%);
            svg {
                margin: 0 0.1rem;
            }
        }

        .right {
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            right: 0;
            top: 50%;
            transform: translate(0, -50%);
            margin: 0 0.1rem;
            font-size: 0.25rem;

            img {
                width: 0.25rem;
                height: 0.25rem;
                margin: 0 0.1rem;
            }
        }
    }

    .folders-container {
        margin: 0.2rem;
        display: flex;
        flex-direction: column;

        svg {
            margin: 0.2rem;
        }
    }
`;
