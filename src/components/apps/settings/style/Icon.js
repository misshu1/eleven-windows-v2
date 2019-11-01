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
        color: ${props => props.theme.textColor};
        cursor: default;
        text-align: center;
        text-decoration: none;
    }

    &&:hover {
        background: ${props => props.theme.settingsResizeIconBg};
        border: 1px solid ${props => props.theme.settingsResizeOutline};
    }
`;
