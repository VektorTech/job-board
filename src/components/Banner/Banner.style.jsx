import styled from 'styled-components';

export const BannerWrapper = styled.section`
    max-width: 97%;
    height: ${props => props.thin ? '15rem' : '20rem'};
    margin: 0 1.5%;
    margin-top: 6rem;
    border-radius: 1.3rem;
    background: linear-gradient(#2a7cdb, #2cd4ce);

    @media screen and (max-width: 667px) {
        height: 10rem;
    }
`;

export const BannerContent = styled.div`
    width: 100%;
    text-align: center;
    transform: translateY(190%);
    color: white;
    font-size: 2.5rem;

    @media screen and (max-width: 667px) {
        transform: translateY(60%);
    }
`;

export const BannerContent2 = styled.div`
    transform: translateY(75%);

    @media screen and (max-width: 667px) {
        transform: translateY(30%);
    }
`;