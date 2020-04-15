import styled from 'styled-components';
import { PageContainer } from '../../src/components/Other/PageContainer.style';

export const PageWrapper = styled(PageContainer)`
    height: 20rem;
    display: flex;
    flex-direction: row;

    @media screen and (max-width: 1024px) {
        padding: 4rem 15%;
    }

    @media screen and (max-width: 667px) {
        display: block;
        padding-bottom: 28rem;

        & > div {
            width: 100%;
        }
    }
`;

export const Aside = styled.div`
    width: 35%;
    height: 100%;
    padding: 0 2%;

    @media screen and (max-width: 667px) {
        display: flex;
        flex-direction: row;
        height: fit-content;
    }
`;

export const Main = styled.div`
    width: 65%;
    height: 100%;
    padding: 0 2%;
`;

export const ContentWrapper = styled.div`
    padding: 2rem 0;
    
    @media screen and (max-width: 667px) {
        padding: .5rem 0;
    }
`;

export const ImageContainer = styled.div`
    margin: 1rem 0;
    width: 10rem;
    height: 10rem;
    background: url( ${props => props.image} ) no-repeat;
    background-size: contain;

    
    @media screen and (max-width: 1024px) {
        width: 7rem;
        height: 7rem;
    }

    @media screen and (max-width: 667px) {
        width: 5rem;
        height: 5rem;
    }
`;

export const TextContainer = styled.p`
    padding: .5rem 0;
    font-size: 1.2rem;

    @media screen and (max-width: 667px) {
        float: right;
    }
`;