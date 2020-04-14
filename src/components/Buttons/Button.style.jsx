import styled from 'styled-components';

export const ButtonDefault = styled.button`
    width: 12rem;
    height: 4rem;
    font-size: 1.2rem;
    border-radius: 1rem;
    border: none;
    display: inline-block;
    color: white;
    background-color: #2a7cdb;

    @media screen and (max-width: 1024px) {
      width: 7rem;
      height: 4rem;
      font-size: 1.1rem;
    }
`;

export const Submit = styled(ButtonDefault)`
    width: 100%;
    height: 100%;
    font-size: 1.8rem;

    @media screen and (max-width: 1024px) {
      width: 100%;
      height: 4rem;
      font-size: 1.2rem;
    }
`;

export const SearchSubmit = styled(ButtonDefault)`
    width: 100%;
    height: 5rem;
    
    @media screen and (max-width: 1024px) {
      width: 100%;
      height: 4rem;
      font-size: 1.2rem;
    }
`;

export const Apply = styled(ButtonDefault)`
    margin: 1rem 0;
`;

export const SaveButton = styled(ButtonDefault)`
    color: #2a7cdb;
    background-color: white;
    border: 1px solid #2a7cdb;
    margin: 1rem 1.5rem;
`;
