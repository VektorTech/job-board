import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const BlockContainer = styled.div`
    width: 100%;
    height: 6rem;
    margin-bottom: 5rem;
    display: grid;
    grid-template-columns: 1.5fr 5.5fr 2.2fr;

    @media screen and (max-width: 1024px) {
        grid-gap: .5rem;
    }
`;

export const CompLogoContainer = styled.div`
`;

export const JobDetail = styled.ul`
    margin-top: 2.5rem;
`;

export const ListItem = styled.li`
    display: inline;
    color: #999;
    margin-right: 20%;
    
    @media screen and (max-width: 1024px) {
      margin-right: 5%;
    }
`;

export const JobDate = styled.p`
    margin-top: 1rem;
    color: #999;
`;

export const FAI = styled(FontAwesomeIcon)`
    margin-right: .6rem;
`;