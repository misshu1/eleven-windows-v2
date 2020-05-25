import styled from 'styled-components';

export const MenuContainer = styled.section`
    display: flex;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    color: ${(props) => props.theme.textColor};
    z-index: 400;
    user-select: none;

    @media only screen and (min-width: 450px) {
        width: initial;
    }
`;
