import { Image } from 'pure-react-carousel';
import styled from 'styled-components';

export const SlideImage = styled(Image)`
    width: 100%;
    height: 100%;
    background-color: var(--backgroundActive);
    background-position: center center;
    background-size: contain !important;
    background-repeat: no-repeat;
`;
