import styled from 'styled-components';
import { zIndex } from 'components/theme/zIndex';

export const MenuContainer = styled.section`
    display: flex;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    color: var(--colorDefault);
    z-index: ${zIndex.linux.sideMenu.body};
    user-select: none;
`;
