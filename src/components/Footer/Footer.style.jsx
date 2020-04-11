import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const FooterWrapper = styled.footer`
    width: 100%;
    height: 40rem;
    margin-top: 3rem;
    color: #093669;
`;

export const FooterInner = styled.div`
    width: 70%;
    margin: 0 15%;
    height: 50%;
    border-top: 1px solid #999;
    display: flex;
    flex-direction: row;

    @media screen and (max-width: 1024px) {
        display: block;
    }
`;

export const Column = styled.div`
    width: 25%;
    padding: 5rem 0 0 1rem;

    @media screen and (max-width: 1024px) {
        white-space: nowrap;
        width: 50%;
        display: inline-block;
    }
`;

export const Copy = styled.div`
    width: 100%;
    text-align: center;
    font-size: 1.3rem;

    @media screen and (max-width: 1024px) {
        margin-top: 15rem;
    }
`;

export const FAI = styled(FontAwesomeIcon)`
    margin-right: .8rem;
`;