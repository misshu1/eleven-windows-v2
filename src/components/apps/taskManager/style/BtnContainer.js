import styled from 'styled-components';

export const BtnContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 3rem;
    z-index: 20;
    padding-right: 1rem;
    box-shadow: 0px -2px 4px -1px rgba(0, 0, 0, 0.2),
        0px -4px 5px 0px rgba(0, 0, 0, 0.14),
        0px -1px 10px 0px rgba(0, 0, 0, 0.12);
`;
