import styled from 'styled-components';

export const BannerWrapper = styled.section`
    max-width: 97%;
    height: ${props => props.thin ? '15rem' : '20rem'};
    margin: 0 1.5%;
    margin-top: 6rem;
    border-radius: 1.3rem;
    background-color: blue;
`;

export const BannerContent = styled.div`
    width: 100%;
    text-align: center;
    transform: translateY(190%);
    color: white;
    font-size: 2.5rem;
`;

export const BannerContent2 = styled.div`
    width: 100%;
    text-align: center;
    transform: translateY(75%);
    color: white;
    font-size: 2.5rem;
`;