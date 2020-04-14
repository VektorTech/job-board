import styled from "styled-components";
import { PageContainer } from "../../src/components/Other/PageContainer.style";

export const ViewJobContainer = styled(PageContainer)`
    display: grid;
    grid-template-columns: .8fr repeat(4, 1fr);
    grid-auto-columns: 1fr;
    grid-template-rows: 12rem 5rem 8rem 8rem max-content;
    grid-template-areas: 
    "a b b b b"
    "a b b b b"
    "c c c c c"
    "d d d d d"
    "e e e e e";
`;

export const CompLogo = styled.div`
    grid-area: a;
    text-align: center;
`;
export const CompHeading = styled.div`
    grid-area: b;
    padding-left: 5%;
`;
export const CompDetails = styled.div`
    grid-area: c;
    display: flex;
    flex-direction: row;
`;
export const CompTagsArea = styled.div`
    grid-area: d;
    overflow: hidden;
`;
export const JobDescr = styled.div`
    grid-area: e;
    word-spacing: .2rem;
    font-size: 1.2rem;
    line-height: 2rem;
    padding-top: 3rem;
`;
 
export const HeadTag = styled.h1`
    font-weight: bold;
    ${({lg}) => lg ? "font-size: 3rem;":""}
    margin-bottom: 1rem;
`;

export const Ratings = styled.p`
    font-size: 2.3rem;
    font-weight: bold;
    padding-top: 1rem;
    color: green;
`;

export const Nav = styled.ul`
    font-size: 1.3rem;
`;

export const Column = styled.div`
    width: 33.33%;
    padding: .5rem 0 0 .5rem;
`;