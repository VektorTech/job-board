import styled from "styled-components";

export const SearchPageContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 150rem;
    margin: 5rem 0;
    padding: 4rem 15%;
`;

export const SearchPageAside = styled.aside`
    width: 35%;
`;

export const SearchPageMain = styled.div`
    width: 65%;
`;

export const HeadTag = styled.h1`
    font-weight: bold;
    height: 2.3rem;
    line-height: 2.3rem;
    ${({lg}) => lg ? "font-size: 3rem;":""}
    margin-bottom: 1rem;
`;

export const SearchTagArea = styled.div`
    width: 90%;
    height: fit-content;
    margin: 2rem 0; 
    overflow: hidden;
`;

export const SearchTag = styled.div`
    width: fit-content;
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

export const ListItem = styled.li`
    margin: 1rem 0;
`;

export const CheckBox = styled.input`
    transform: translateY(25%);
`;