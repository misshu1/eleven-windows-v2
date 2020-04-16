import styled from 'styled-components';

export const IconsMenu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 0.5em;
    height: 100%;
    width: 100%;
    background: ${(props) => props.theme.background};
    border-top-right-radius: 2em;
    border-bottom-right-radius: 2em;
    box-shadow: 2px -2px 4px -1px rgba(0, 0, 0, 0.2),
        4px -4px 5px 0px rgba(0, 0, 0, 0.14),
        1px -1px 10px 0px rgba(0, 0, 0, 0.12);
`;
