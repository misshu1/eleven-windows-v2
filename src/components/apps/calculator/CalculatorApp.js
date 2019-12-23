import React from 'react';
import FolderApp from '../../folder/FolderApp';
import { Container, ButtonsContainer, NumberPad, Operators } from './style';

const CalculatorApp = () => {
    return (
        <FolderApp
            appId={3}
            marginLeft='8rem'
            marginTop='8rem'
            height='42rem'
            width='21.5rem'
        >
            <Container>
                <div style={{ flex: 1 }}></div>
                <ButtonsContainer>
                    <NumberPad>
                        <button>7</button>
                        <button>8</button>
                        <button>9</button>
                        <button>4</button>
                        <button>5</button>
                        <button>6</button>
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>.</button>
                        <button>0</button>
                        <button>DEL</button>
                    </NumberPad>
                    <Operators>
                        <button>&divide;</button>
                        <button>&times;</button>
                        <button>-</button>
                        <button>+</button>
                        <button>=</button>
                    </Operators>
                </ButtonsContainer>
            </Container>
        </FolderApp>
    );
};
export default CalculatorApp;
