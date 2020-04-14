import styled from 'styled-components';

export const TagBox = styled.div`
    width: fit-content;
    height: 3rem;
    line-height: 3rem;
    text-align: center;
    display: inline-block;
    border-radius: 1.1rem;
    background-color: #eee;

`;

export const SearchTag = styled(TagBox)`
    color: #2a7cdb;
    text-transform: uppercase;
    font-weight: bold;
    padding: 0 1rem;
    margin: .2rem .8rem .5rem .2rem; 
`;

export const JobType = styled(TagBox)`
    width: 8rem;
    background-color: #b0ffe9;
    font-weight: bold;
    border-radius: 2rem;
`;