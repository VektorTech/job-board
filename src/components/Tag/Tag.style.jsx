import styled from 'styled-components';

export const TagBox = styled.div`
    width: fit-content;
    height: 3rem;
    line-height: 3rem;
    text-align: center;
    display: inline-block;
    border-radius: 1.1rem;
    background-color: #999;

`;

export const SearchTag = styled(TagBox)`
    color: blue;
    text-transform: uppercase;
    padding: 0 1rem;
    margin: .2rem .8rem .5rem .2rem; 
`;

export const JobType = styled(TagBox)`
    width: 8rem;
    color: blue;
    background-color: aqua;
    border-radius: 2rem;
`;