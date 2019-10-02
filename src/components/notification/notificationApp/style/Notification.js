import styled, { keyframes, css } from 'styled-components';

export const Notification = styled.div`
    border: 1px solid ${props => props.theme.notificationBorder};
    background: ${props => props.theme.nottificationMessageBg};
    color: ${props => props.theme.modalColor};
    width: 100%;
    margin: 0.5rem 0;
    display: flex;

    .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 4rem;
    }

    .title {
        display: flex;

        button {
            border: none;
            outline: none;
            background: transparent;
            color: ${props => props.theme.notificationColor};
            font-weight: 600;
            font-size: 1.2rem;
            z-index: 1;
        }
    }

    .content {
        flex: 1;
    }

    h2 {
        color: ${props => props.theme.notificationColor};
        margin: 0;
        flex: 1;
    }
    p {
        margin: 0.5rem 0;
        padding-right: 0.5rem;
    }
`;
