import styled from 'styled-components';

import { Icon } from '../Icon.style';

export const FooterWrapper = styled.footer`
    width: 100%;
    height: 40rem;
    margin-top: 3rem;
`;

export const FooterInner = styled.div`
    width: 70%;
    margin: 0 15%;
    height: 50%;
    border-top: 1px solid #999;
    display: flex;
    flex-direction: row;
`;

export const Column = styled.div`
    width: 25%;
    padding: 5rem 0 0 1rem;
`;

export const HeadTag = styled.h1`
    font-weight: bold;
`;

export const Nav = styled.ul`
    padding: 1rem 0 0 0;
`;

export const Copy = styled.div`
    widtH: 100%;
    text-align: center;
    font-size: 1.3rem;
`;

export const FAI = styled(Icon)`
    margin-right: .8rem;
`;