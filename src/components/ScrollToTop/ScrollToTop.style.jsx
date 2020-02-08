import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ScrollToTop = styled.button`
    position: fixed;
    z-index: 20;
    width: 5rem;
    height: 5rem;
    right: 3.3rem;
    bottom: 2.5rem;
    text-align: center;
    border-radius: 100%;
    box-shadow: 0 0 1rem .2rem #9999;
    background-color: white;
    cursor: pointer;
    border: none;
`;

export const ArrowUp = styled(FontAwesomeIcon)`
    color: blue;
`;