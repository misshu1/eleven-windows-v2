import styled from 'styled-components';

export const Icon = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: ${props => props.iconSize}rem;
    height: ${props => props.iconSize}rem;
    border: 1px solid transparent;
    margin: 0.5rem;

    img {
        height: ${props => props.imgSize}rem;
        width: ${props => props.imgSize}rem;
    }

    .icon {
        color: #d6d8de;
        cursor: default;
        text-align: center;
        text-decoration: none;
    }

    &&:hover {
        background: rgba(174, 192, 229, 0.2);
        border: 1px solid rgb(220, 227, 242, 0.5);
    }
`;
