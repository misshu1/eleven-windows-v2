import styled from 'styled-components';

export const Card = styled.div`
    margin: 1rem 0.5rem;
    max-width: 100%;
    border-radius: 5px;
    background: ${props => props.theme.cardBg};
    transition: background 0.2s ease-in-out;
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
        0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;
