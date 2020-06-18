import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
0% {
     opacity: 0;
}
100% {
    opacity: 1;
}
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    color: ${(props) => props.theme.notificationColor};

    .notifications-container {
        padding: 0.6rem;
        flex: 1;
    }

    .btn-container {
        border-top: 1px solid ${(props) => props.theme.startMenuBorder};
        padding: 1rem;
    }

    .no-notifications {
        opacity: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        animation: ${fadeIn} 0.3s cubic-bezier(0.68, 0.62, 0.7, 0.98) 1 forwards;
        animation-delay: 0.25s;
    }
`;
