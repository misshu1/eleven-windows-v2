import styled from 'styled-components';

export const IconContainer = styled.div`
    border: 1px solid transparent;
    outline: none;
    height: fit-content;

    svg {
        height: 3.75rem;
        width: 3.75rem;
    }

    && a,
    .icon {
        display: block;
        width: 100%;
        height: 100%;
        color: #d6d8de;
        cursor: default;
        text-align: center;
        text-decoration: none;
        border: 1px solid transparent;

        .name {
            text-shadow: 1px 1px 1px black;
        }

        @supports (display: -webkit-box) {
            .name {
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
            }
        }

        @supports not (display: -webkit-box) {
            .name {
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
            }
        }
    }

    &&:hover {
        background: rgba(174, 192, 229, 0.2);
        border: 1px solid rgb(220, 227, 242, 0.5);
    }

    &&:focus,
    &&:active {
        background: rgba(174, 192, 229, 0.4);
        border: 1px solid rgb(220, 227, 242, 0.7);
    }
`;
