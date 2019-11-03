import styled from 'styled-components';

export const BackgroundPreview = styled.div`
    position: relative;
    background: ${props => props.theme.desktopBg[props.background]};
    width: 15rem;
    height: 8rem;
    margin: 1rem;

    h4 {
        position: absolute;
        color: #d6d8de;
        margin: 0;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;
