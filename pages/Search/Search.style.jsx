import styled from "styled-components";
import { PageContainer } from "../../src/components/Other/PageContainer.style";

export const SearchPageContainer = styled(PageContainer)`
    height: fit-content;
    display: flex;
    flex-direction: row;
`;

export const SearchPageAside = styled.aside`
    width: 35%;

    @media screen and (max-width: 1024px) {
        overflow: hidden;
        background: #fff;
        width: 0;
        height: 0;
        margin-top: -5rem;

        &::before {
            content: "Filter Results ⮟";
            position: absolute;
            font-size: 1.5rem;
            font-weight: bold;
            cursor: pointer;
        }

        &:hover {
            position: absolute;
            width: fit-content;
            height: fit-content;
            padding: 2rem 2rem 0 2.5rem;
            border-radius: 1rem;
            box-shadow: .2rem .2rem 1rem #bbb;

            &::before {
                visibility: hidden;
            }
        }
    }
`;

export const SearchPageMain = styled.div`
    width: 65%;

    @media screen and (max-width: 1024px) {
        width: 100%;
    }
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