import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

export class ErrorBoundary extends React.Component {
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
                    <Text>Something went wrong.</Text>
                </Container>
            );
        }

        return this.props.children;
    }
}

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0
    }
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: var(--background);
`;

const Text = styled.h1`
    color: var(--colorDefault);
    font-size: 48px;
`;
