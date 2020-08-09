import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;

    .header-container {
        display: flex;
        align-items: center;
        position: relative;
        border-bottom: 1px solid var(--border);
        width: 100%;
        height: 4rem;

        h3 {
            display: flex;
            align-items: center;
            justify-content: center;
            flex: 1;
            margin: 0;
            font-size: 2rem;
        }

        .close-btn {
            position: absolute;
            right: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
            background-color: var(--primaryDark);
            border: none;
            outline: none;
            border-radius: 100%;
            width: 2rem;
            height: 2rem;
        }

        .close-btn:hover {
            box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.4);
        }
    }
`;
