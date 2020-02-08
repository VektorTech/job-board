import styled from 'styled-components';

export const ButtonDefault = styled.button`
    width: 12rem;
    height: 4rem;
    font-size: 1.2rem;
    border-radius: 1rem;
    border: none;
    display: inline-block;
    color: white;
    background-color: blue;
`;

export const SearchSubmit = styled(ButtonDefault)`
    width: 100%;
    height: 5rem;
 `;

export const Apply = styled(ButtonDefault)`
    margin: 1rem 0;
`;

export const SaveButton = styled(ButtonDefault)`
    color: blue;
    background-color: white;
    border: 1px solid blue;
    margin: 1rem 1.5rem;
`;
