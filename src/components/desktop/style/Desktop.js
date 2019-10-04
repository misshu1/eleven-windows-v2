import styled from 'styled-components';

export const Desktop = styled.section`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    user-select: none;
    position: relative;
    height: calc(100vh - 3.5rem);
    width: 100%;
    color: #d6d8de;
    background: ${props => props.theme.desktopBg.bg11};
    overflow: hidden;
`;
