import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const BlockContainer = styled.div`
    width: 100%;
    height: 6rem;
    margin-bottom: 5rem;

    display: grid;
    grid-template-columns: .4fr .6fr 1fr .5fr;
    grid-template-rows: 1fr .4fr;
    grid-template-areas: 
    "a b b c"
    "a d e c";

    @media screen and (max-width: 1024px) {
        grid-column-gap: .5rem;
        
    }

    @media screen and (max-width: 667px) {
        grid-column-gap: .5rem;
        grid-template-areas: 
        "a b b c"
        "d d e e";
    }
`;

export const CompLogoContainer = styled.div`
    grid-area: a;
`;

export const Title = styled.div`
    grid-area: b;
    
    @media screen and (max-width: 667px) {
        overflow: hidden;
    }
`;

export const Time = styled.div`
    grid-area: c;
    white-space: nowrap;
`;

const ListItem = styled.div`
    white-space: nowrap;
    font-size: 1.2rem;
    padding-top: 2rem;
    color: #999;

    /**Prevents weird grid behaviour */
    min-width: 0;
    min-height: 0;

    @media screen and (max-width: 667px) {
        padding-top: 0;
    }
`;

export const CompanyName = styled(ListItem)`
    grid-area: d;
`;

export const CompanyLocation = styled(ListItem)`
    grid-area: e;
`;

export const JobDate = styled.p`
    font-size: 1.2rem;
    margin-top: .5rem;
    color: #999;
`;

export const FAI = styled(FontAwesomeIcon)`
    margin-right: .6rem;
`;