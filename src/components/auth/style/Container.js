import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;

    h3 {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 4rem;
        margin: 0;
        font-size: 2rem;
        border-bottom: 1px solid ${(props) => props.theme.startMenuBorder};
    }
`;
