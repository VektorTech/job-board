import styled from "styled-components";
import { PageContainer } from "../../src/components/Other/PageContainer.style";

export const SearchPageContainer = styled(PageContainer)`
    height: fit-content;
    display: flex;
    flex-direction: row;
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