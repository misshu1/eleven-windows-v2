import styled from 'styled-components';

export const LoginContainer = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    height: 3.5rem;
    width: 100%;
    border-bottom: 1px solid ${(props) => props.theme.startMenuBorder};

    && span {
        display: block;
        text-align: center;
        width: 3.5rem;
    }

    && h4 {
        margin: 0 0 0 0.5rem;
    }
`;
