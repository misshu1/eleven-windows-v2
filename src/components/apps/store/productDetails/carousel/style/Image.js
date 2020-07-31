import styled from 'styled-components';

export const Image = styled.div`
    width: 100%;
    height: 100%;
    background: ${(props) => `url(${props.url})`};
    background-size: cover;
    background-position: center center;
`;
