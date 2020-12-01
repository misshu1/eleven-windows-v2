import styled from 'styled-components';

export const IconContainer = styled.div`
    svg {
        height: 3.2rem;
        width: 3.2rem;
    }

    && a {
        display: block;
        width: 100%;
        height: 100%;
        color: #d6d8de;
        cursor: default;
        text-align: center;
        text-decoration: none;
    }

    @supports (display: -webkit-box) {
        .app-name {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }
    }

    @supports not (display: -webkit-box) {
        .app-name {
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
    }
`;
