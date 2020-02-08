import styled from "styled-components";
import {Icon} from '../Icon.style';

export const BlockContainer = styled.div`
    width: 100%;
    height: 6rem;
    margin-bottom: 5rem;
    display: grid;
    grid-template-columns: 1.5fr 5.5fr 2.2fr;
    grid-gap: 2rem;
`;

export const CompLogoContainer = styled.div`
    background-color: violet;
`;

export const ListItem = styled.li`
    display: inline;
    color: #999;
    margin-right: 20%;
`;

export const JobType = styled.div`
    float: right;
    width: 8rem;
    height: 2.8rem;
    line-height: 2.8rem;
    border-radius: 2rem;
    text-align: center;
    color: blue;
    background-color: aqua;
`;

export const JobDate = styled.p`
    float: right;
    margin-top: 1rem;
    color: #999;
`;

export const FAI = styled(Icon)`
    margin-right: .6rem;
`;