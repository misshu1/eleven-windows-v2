import styled from 'styled-components';

export const Folder = styled.section`
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${props => props.theme.background};
    color: ${props => props.theme.textColor};
    transition: background 0.2s ease-in-out, color 0.2s ease-in-out;

    .ScrollbarsCustom-Content {
        height: 100%;
    }

    @media (min-width: 28rem) {
        height: ${props => (props.height ? props.height : '44rem')};
        width: ${props => (props.width ? props.width : '44rem')};
    }

    @media (min-width: 50rem) {
        top: ${props => (props.marginTop ? props.marginTop : '5rem')};
        left: ${props => (props.marginLeft ? props.marginLeft : '5rem')};
    }

    @media (max-height: 44rem) {
        height: 100%;
        top: 0;
    }
`;
