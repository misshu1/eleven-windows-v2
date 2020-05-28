import styled from 'styled-components';

export const LoginContainer = styled.div`
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
        margin-right: 0.5rem;
    }
`;
