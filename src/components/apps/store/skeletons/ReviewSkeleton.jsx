import React from 'react';
import styled, { keyframes } from 'styled-components';

const wave = keyframes`
    0% {
      transform: translateX(-100%)
    }
    60% {
      transform: translateX(100%)
    }
    100% {
      transform: translateX(100%)
    }
`;

export const Container = styled.div`
    margin: 2rem 0;
    border-radius: 4px;
    background: var(--grey80);
    box-shadow: 0px 0px 10px -7px var(--boxShadow);
    position: relative;
    overflow: hidden;

    &&::after {
        content: '';
        position: absolute;
        animation: ${wave} 1.6s linear 0.5s infinite;
        background: linear-gradient(
            90deg,
            transparent,
            var(--whiteTransparent),
            transparent
        );
        transform: translateX(-100%);
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
    }

    .top,
    .bot {
        display: flex;
    }

    .top {
        height: 3rem;
        border-bottom: 1px solid var(--grey20);
        align-items: center;
        padding: 0.5rem;

        .user,
        .date {
            border-radius: 0.5rem;
            height: 1rem;
            background: var(--grey20);
        }

        .avatar {
            width: 1.5rem;
            height: 1.5rem;
            background: var(--grey20);
            border-radius: 100%;
        }

        .user {
            width: 10rem;
            margin-left: 1rem;
        }

        .date {
            width: 5rem;
        }
    }

    .bot {
        padding: 0.5rem;
        flex-wrap: wrap;

        .small,
        .large {
            height: 1rem;
            background: var(--grey20);
            margin: 0.5rem 0;
            border-radius: 0.5rem;
        }

        .small {
            width: 75%;
        }

        .large {
            width: 100%;
        }
    }
`;

const ReviewSkeleton = () => {
    return (
        <Container>
            <div className='top'>
                <div className='avatar' />
                <div className='user' />
                <div style={{ flex: 1 }} />
                <div className='date' />
            </div>
            <div className='bot'>
                <div className='large' />
                <div className='small' />
            </div>
        </Container>
    );
};

export default ReviewSkeleton;
