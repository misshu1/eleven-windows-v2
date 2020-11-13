import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export class ErrorBoundary extends Component {
    state = {
        error: false
    };

    componentDidCatch(error, info) {
        console.log('Error boundary: ', error, info);
        this.setState({ error: true });
    }

    render() {
        if (this.state.error) {
            return (
                <Container>
                    <GlobalStyle />
                    <SadFace>:(</SadFace>
                    <Text>
                        Your PC ran into a problem and needs to restart. We’re
                        just collecting some error info, and then we’ll restart
                        for you.
                    </Text>
                </Container>
            );
        }

        return this.props.children;
    }
}

export const GlobalStyle = createGlobalStyle`
    ${normalize}

    * {
        box-sizing: border-box;
    }

    html, body, #desktop{
        height: 100%;
    }

    body {
        margin: 0;
        font-family: 'Roboto', sans-serif;
        color: var(--colorDefault);
        background-color: var(--background);
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    max-width: 80rem;
    margin: 0 auto;
    padding: 0 2rem;
`;

const SadFace = styled.div`
    font-size: 6rem;
    width: 100%;
    margin-bottom: 2rem;
`;

const Text = styled.h2`
    line-height: 2.2rem;
    margin: 0;
`;
