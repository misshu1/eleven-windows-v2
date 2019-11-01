import styled from 'styled-components';

export const FlagImgContainer = styled.div`
    cursor: default;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 3.5rem;
    margin: 0 1px;
    transition: color 0.2s ease-in-out;

    &&:hover,
    :focus {
        background: ${props => props.theme.clockHover};
        outline: none;
    }
`;
