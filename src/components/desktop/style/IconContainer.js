import styled from 'styled-components';

export const IconContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 5.5rem;
    height: 5.5rem;
    border: 1px solid transparent;
    margin: 0.5rem;

    img {
        height: 3.75rem;
        width: 5rem;
    }

    && a,
    .icon {
        color: #d6d8de;
        cursor: default;
        text-align: center;
        text-decoration: none;
    }

    && a:hover,
    :hover {
        background: rgba(174, 192, 229, 0.2);
        border: 1px solid rgb(220, 227, 242, 0.5);
    }

    && a:focus,
    :focus {
        background: rgba(174, 192, 229, 0.4);
        border: 1px solid rgb(220, 227, 242, 0.7);
    }
`;
