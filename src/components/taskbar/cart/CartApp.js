import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { Container } from './style';
import { TaskbarContext } from '../../../contexts/taskbarContext';

const CartApp = () => {
    const {
        taskbar: { cartOpen }
    } = useContext(TaskbarContext);

    return ReactDOM.createPortal(
        <>{cartOpen && <Container>cart</Container>}</>,
        document.querySelector('#desktop')
    );
};
export default CartApp;
