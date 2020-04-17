import styled from 'styled-components';

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3.5rem;
    width: 3.5rem;
    background: ${(props) => props.theme.background};
    border-radius: 0.5rem;
`;
