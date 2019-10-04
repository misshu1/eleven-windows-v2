import styled from 'styled-components';

export const Widget = styled.div`
    display: flex;
    flex-direction: column;
    width: 6rem;
    height: 4rem;
    margin: 0.5rem;
    background: ${props => props.theme.notificationWidgetBg};
    border: 1px solid ${props => props.theme.notificationBorder};
    padding: 0.2rem;

    &&:hover {
        background: ${props => props.theme.widgetHover};
    }

    .icon {
        margin: 0.3rem;
    }

    h5 {
        margin: 0;
    }
`;
