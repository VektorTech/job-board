import styled from 'styled-components';

export const ModalWrapper = styled.div`
    position: fixed;
    z-index: 1000;
    width: 100vw;
    height: 100%;
`;

export const ModalBackDrop = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(5,5,20,.8);
`;

export const ModalContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    margin: 10vh 35%;
    width: 30%;
    height: 80vh;
    background-color: white;
    border-radius: .5rem;
    /* overflow: auto; */
`;

export const CloseWrapper = styled.div`
    width: 100%;
    height: 10%;
    padding: 3% 5%;
    text-align: right;
`;