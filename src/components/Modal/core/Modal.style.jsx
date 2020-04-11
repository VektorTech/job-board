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
    width: 40rem;
    margin: 10vh calc( (100% - 40rem)/2 );
    height: 80vh;
    background-color: white;
    border-radius: .5rem;

    @media screen and (max-width: 1024px) {
      width: 100%;
      margin: 10vh 0;
    }
`;

export const CloseWrapper = styled.div`
    width: 100%;
    height: 10%;
    padding: 3% 5%;
    text-align: right;
`;