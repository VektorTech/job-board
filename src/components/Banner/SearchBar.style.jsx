import styled from 'styled-components';

export const SearchBox = styled.div`
    max-width: 50%;
    margin: 0 25%;
    ${ ({half}) => half ? "margin-top: -3rem;" : "" }
    height: 6rem;
    border-radius: 1rem;
    padding: 0 .5rem;
    ${ ({half}) => half ? "box-shadow: 0 1rem 3rem -.8rem aquamarine;" : "" }
    background-color: white;
    display: grid;
    grid-template-columns: 1fr .005fr 1fr .5fr;
    grid-template-rows: 1fr;
    align-items: center;
    grid-gap: .5rem;
`;

 export const Search = styled.input`
    width: 80%;
    border: none;
 `;

 export const Select = styled.select`
    width: 90%;
    color: #666;
    border: none;
 `;
 
 export const Submit = styled.button`
    width: 100%;
    height: 5rem;
    border: none;
    border-radius: 1rem;
    background-color: blue;
    color: white;
    font-size: 1.2rem;
 `;