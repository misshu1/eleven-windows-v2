import styled from 'styled-components';
import bgDesktop from '../../../assets/images/desktop/bg-desktop.jpg';
import bgMobile from '../../../assets/images/desktop/bg-mobile.jpg';
import bgTablet from '../../../assets/images/desktop/bg-tablet.jpg';

export const Desktop = styled.section`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    position: relative;
    height: calc(100vh - 3.5rem);
    width: 100%;
    color: #d6d8de;
    background: url(${bgMobile});
    background-size: cover;
    background-position: top left;
    overflow: hidden;

    @media (min-width: 28rem) and (max-width: 56.24rem) {
        background: url(${bgTablet});
        background-size: cover;
        background-position: top left;
    }

    @media (min-width: 56.25rem) {
        background: url(${bgDesktop});
        background-size: cover;
        background-position: top left;
    }
`;
