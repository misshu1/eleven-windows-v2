import styled, { css } from 'styled-components';

export const TableRow = styled.div`
    display: grid;
    grid-template-columns: 4fr 2fr;
    grid-template-rows: minmax(2rem, 2.5rem);
    outline: none;
    user-select: none;
    border-left: 1px solid var(--backgroundHover);
    border-bottom: 1px solid var(--backgroundHover);

    .stats {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-right: 0.2rem;
        border-right: 1px solid var(--backgroundHover);
    }

    .app-name {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding-right: 0.2rem;
        border-right: 1px solid var(--backgroundHover);
    }

    &&:hover {
        background-color: var(--backgroundHover);
        transition: background 0.05s ease-in-out;
        border-bottom: 1px solid transparent;
        border-left: 1px solid transparent;

        .app-name,
        .stats {
            border-right: 1px solid transparent;
        }
    }

    ${(props) =>
        props.selectedApp &&
        css`
            background-color: var(--backgroundActive);
            border-bottom: 1px solid transparent;
            border-left: 1px solid transparent;

            .app-name,
            .stats {
                border-right: 1px solid transparent;
            }

            &&:hover {
                background-color: var(--backgroundActive);
            }
        `}
`;
