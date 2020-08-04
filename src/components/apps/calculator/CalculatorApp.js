import React from 'react';

import Emoji from '../../common/Emoji';
import FolderApp from '../../folder/FolderApp';
import { ButtonsContainer, Container, NumberPad, Operators } from './style';

const CalculatorApp = () => {
    return (
        <FolderApp
            appId={3}
            marginLeft={130}
            marginTop={130}
            height='42rem'
            width='21.5rem'
        >
            <Container>
                <div style={{ flex: 1, minHeight: '15rem' }}>
                    <h3
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100%',
                        }}
                    >
                        <Emoji symbol='📝' label='desert' /> Don't touch this,
                        it's not working.
                    </h3>
                </div>
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
