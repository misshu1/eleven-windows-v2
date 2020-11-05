import styled from 'styled-components';
import { zIndex } from 'components/theme/zIndex';

export const NameBar = styled.div`
    display: flex;
    z-index: ${zIndex.folder.nameBar};
    width: 100%;
    height: 3.5rem;
    user-select: none;
    transition: background 0.2s ease-in-out;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
        0px 4px 5px 0px rgba(0, 0, 0, 0.14),
        0px 1px 10px 0px rgba(0, 0, 0, 0.12);

    && .back-button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 4rem;
        height: 100%;
        color: var(--primary);
        font-size: 1.4rem;
        outline: none;
        border: none;
        background: transparent;
    }

    .menu {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 4rem;
        height: 100%;
        font-size: 1.3rem;
    }

    && .menu:hover,
    && .menu:focus {
        background-color: var(--backgroundHover);
    }
`;
