import styled from 'styled-components';

export const DetailsContainer = styled.div`
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, max-content);
    grid-gap: 1rem;
    grid-template-areas:
        'image'
        'content'
        'buttons';
    padding: 1.5rem 0.5rem;

    img {
        grid-area: image;
        width: 100%;
        height: auto;
        max-height: 8rem;
    }

    .card-content {
        grid-area: content;
    }

    .title {
        margin-bottom: 1rem;
    }

    .buttons {
        grid-area: buttons;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        .price-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }

        .price,
        .full-price {
            display: flex;
            margin: 0 2rem 0 1rem;
            color: ${props => props.theme.material.accent.main};
            transition: color 0.2s ease-in-out;

            .currency {
                font-size: 1.2rem;
                vertical-align: super;
            }
        }

        .full-price {
            position: relative;
            margin: 0;
            color: ${props => props.theme.textColor};

            .currency {
                font-size: 0.9rem;
            }
        }

        .full-price::after {
            content: '';
            position: absolute;
            height: 3px;
            width: 100%;
            right: 0;
            top: 30%;
            background: #e54b4b;
            transform: rotate(15deg);
            border-radius: 8px;
        }

        .svg-bg {
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            width: 2.5rem;
            background: ${props => props.theme.material.accent.main};
            transition: background 0.2s ease-in-out;
            border-top-right-radius: 0 0;
            border-bottom-right-radius: 37% 100%;

            svg {
                .fill-color {
                    fill: #fff;
                }
                .stroke-color {
                    stroke: #fff;
                }
            }
        }
    }

    @media (min-width: 28rem) {
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: minmax(10rem, max-content) auto;
        grid-template-areas:
            'image content content'
            'buttons buttons buttons';

        .buttons {
            justify-content: flex-end;

            .price-container {
                justify-content: flex-end;
            }
        }
    }
`;
