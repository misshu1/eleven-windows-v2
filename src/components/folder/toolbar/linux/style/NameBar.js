import styled from 'styled-components';
import { zIndex } from 'components/theme/zIndex';

export const NameBar = styled.div`
    display: flex;
    z-index: ${zIndex.folder.nameBar};
    width: 100%;
    height: 2.5rem;
    user-select: none;
    background-color: var(--backgroundLight);
    background-image: linear-gradient(
        var(--backgroundLight),
        var(--background)
    );
    transition: background 0.2s ease-in-out;
    border-top-left-radius: 1em;
    border-top-right-radius: 1em;

    .btn {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100%;
        width: 1.3rem;
        height: 1.3rem;
        font-size: 0.8rem;
        background-color: var(--backgroundHover);
    }

    .menuBtn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 3rem;
        height: 100%;
    }

    && .menuBtn:hover,
    && .menuBtn:focus {
        .menu {
            background: var(--primary);
            color: #fff;
        }
    }

    .back-button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 3rem;
        height: 100%;
        background: transparent;
        border: none;
        outline: none;
        color: inherit;
    }

    .back-button:disabled {
        color: var(--primary);
        filter: grayscale(1);
    }

    .back-button:not(:disabled):hover {
        .back-icon {
            background: var(--primary);
            color: #fff;
        }
    }
`;
