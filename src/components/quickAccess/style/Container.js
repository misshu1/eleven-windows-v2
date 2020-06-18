import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    display: flex;
    top: 0;
    right: 0;
    height: 3rem;
    max-width: 21.87rem;
    background: ${(props) => props.theme.background};

    box-shadow: -2px 2px 4px -1px rgba(0, 0, 0, 0.2),
        -4px 4px 5px 0px rgba(0, 0, 0, 0.14),
        -1px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
