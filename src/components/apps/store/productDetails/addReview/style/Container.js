import styled from 'styled-components';

export const Container = styled.div`
    margin: 2rem 0;
    border: 1px solid ${(props) => props.theme.reviewBorder};
    border-radius: 4px;
    background: ${(props) => props.theme.productCardBg};

    &&:hover {
        box-shadow: ${(props) => props.theme.productCardBoxShadow};
    }
`;
