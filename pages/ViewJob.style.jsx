import styled from "styled-components";

export const ViewJobContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: fit-content;
    margin: 5rem 0;
    padding: 4rem 15%;
    display: grid;
    grid-template-columns: .6fr repeat(4, 1fr);
    grid-auto-columns: 1fr;
    grid-template-rows: 12rem 10rem 8rem 8rem max-content;
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

export const CompLogoImg = styled.img`
    width: 8rem;
    height: 8rem;
    border: 1px solid #999;
    border-radius: 1.5rem;
`;
 
export const HeadTag = styled.h1`
    font-weight: bold;
    ${({lg}) => lg ? "font-size: 3rem;":""}
    margin-bottom: 1rem;
`;

export const Ratings = styled.p`
    font-size: 2.5rem;
    font-weight: bold;
    padding-top: 1rem;
    color: green;
    &::after {
        content: ' *'
    }
`;

export const Submit = styled.button`
    display: inline-block;
    width: 12rem;
    height: 4rem;
    border: none;
    border-radius: 1rem;
    background-color: blue;
    color: white;
    font-size: 1.2rem;
    margin: 1rem 0;
`;

export const SaveButton = styled.button`
    display: inline-block;
    width: 12rem;
    height: 4rem;
    border: 1px solid blue;
    border-radius: 1rem;
    background-color: white;
    color: blue;
    font-size: 1.2rem;
    margin: 1rem 1.5rem;
`;

export const Nav = styled.ul`
    /* padding: 1rem 0 0 0; */
`;

export const Column = styled.div`
    width: 33.33%;
    padding: .5rem 0 0 .5rem;
`;

export const SearchTag = styled.div`
    width: fit-content;
    text-transform: uppercase;
    height: 3rem;
    display: inline-block;
    line-height: 3rem;
    text-align: center;
    padding: 0 1rem;
    margin: .2rem .8rem .5rem .2rem; 
    border-radius: 1.1rem;
    background-color: #999;
    color: blue;
`;