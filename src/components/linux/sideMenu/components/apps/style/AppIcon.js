import styled from 'styled-components';

export const AppIcon = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    border-radius: 1.5em;
    transition: all 0.2s;
    color: ${(props) => props.theme.textColor};

    a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        border-radius: 1.5em;
        transition: all 0.2s;
        text-decoration: none;
        color: ${(props) => props.theme.textColor};
    }
    .name {
        margin-top: 0.5rem;
        cursor: default;
    }
    && svg {
        width: 2rem;
        height: 2rem;
        border-radius: 0.2rem;
    }

    &&:hover {
        background: ${(props) => props.theme.iconBgHover};
        transition: all 0.2s;
    }
`;
