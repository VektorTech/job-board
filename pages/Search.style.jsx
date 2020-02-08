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

export const SearchTagArea = styled.div`
    width: 90%;
    height: fit-content;
    margin: 2rem 0; 
    overflow: hidden;
`;

export const ListItem = styled.li`
    margin: 1rem 0;
`;

export const CheckBox = styled.input`
    transform: translateY(25%);
`;