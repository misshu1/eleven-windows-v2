import styled, { css } from 'styled-components';

import { NOTIFICATION_TYPE } from '../../../../contexts/notificationsContext';

export const Container = styled.div`
    display: flex;
    color: #fff;
    width: 100%;
    border-radius: .5em;
    box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2),
    0px 6px 10px 0px rgba(0,0,0,0.14), 
    0px 1px 18px 0px rgba(0,0,0,0.12);

    ${(props) =>
        !props.isModal &&
        css`
            margin: 1rem 0;
            box-shadow: 0px 0px 10px -7px var(--boxShadow);

            &&:hover {
                box-shadow: 0px 0px 0px -2px var(--boxShadow),
                    0px 0px 0px -7px var(--boxShadow),
                    0px 0px 10px -2px var(--boxShadow);
            }
        `}
        
    ${(props) =>
        props.type === NOTIFICATION_TYPE.success &&
        css`
            background: #43a047;
        `}
    ${(props) =>
        props.type === NOTIFICATION_TYPE.warning &&
        css`
            background: #ffa000;
        `}
    ${(props) =>
        props.type === NOTIFICATION_TYPE.error &&
        css`
            background: #d32f2f;
        `}
    ${(props) =>
        props.type === NOTIFICATION_TYPE.info &&
        css`
            background: #2979ff;
        `}

    .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 4rem;
    }

    .title {
        display: flex;
    }

    .content {
        flex: 1;
        padding: .4rem .5rem .4rem 0;
    }

    .message {
        line-height: 1.4;
    }

    h3 {
        display: flex;
        align-items: center;
        margin: 0;
        flex: 1;
    }
    
    p {
        margin: 0.5rem 0;
        word-break: break-all;
        word-break: break-word;
    }

    .code {
        font-weight: 900;
    }

    @media only screen and (min-width: 450px) {
        width: 22rem;
           
        ${(props) =>
            !props.isModal &&
            css`
                width: 100%;
            `}            
    }
`;
