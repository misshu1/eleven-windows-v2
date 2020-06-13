import styled, { css } from 'styled-components';

export const ThemePreview = styled.div`
    position: relative;
    width: 15rem;
    height: 8rem;
    background: ${(props) => props.background};
    margin: 0.5rem 0;

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
        background: ${(props) => props.theme.background};
        transition: background 0.2s ease-in-out;
        font-size: 0.15rem;

        .calculator-title {
            flex: 1;

            .folder-name {
                display: block;
                height: 0.3rem;
                background: ${(props) => props.theme.folderNameBarBg};
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
                background: ${(props) => props.theme.calcNumButtonBg};
                transition: background 0.2s ease-in-out;
            }
            span:last-child {
                color: #fff;
                background: ${(props) => props.theme.accentBg};
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
        background: ${(props) => props.theme.folderNameBarBg};
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

            svg {
                .fill-color {
                    fill: ${(props) => props.theme.textColor};
                }

                .stroke-color {
                    stroke: ${(props) => props.theme.textColor};
                }
            }

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
