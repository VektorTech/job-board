import {
    SearchPageContainer,
    SearchPageMain,
    SearchPageAside,
    HeadTag,
    SearchTag,
    SearchTagArea,
    ListItem,
    CheckBox
} from './Search.style';

import JobBlock from '../src/components/JobBlock/JobBlock';

const asideStruct = {
    "City": [],
    "Categories": [],
    "Job Type": ["Full Time"],
    "Salary Range": []
};

const SearchPage = () => (
    <SearchPageContainer>
        <SearchPageAside>
            <HeadTag>Current Search</HeadTag>
            <SearchTagArea>
                <SearchTag>Sales</SearchTag>
                <SearchTag>Cambridge</SearchTag>
            </SearchTagArea>
            
            {Object.keys(asideStruct).map(key => (
                <ul>
                <HeadTag>Refine by {key}</HeadTag>
                {asideStruct[key].map(item => (
                    <ListItem>
                    <CheckBox type="checkbox"/>
                    <a style={{paddingLeft:"1rem"}} href="/">{item} (1)</a>
                    </ListItem>
                ))}
                </ul>
            ))}
        </SearchPageAside>

        <SearchPageMain>
            <HeadTag big>Job Listing</HeadTag>
            <br />
            <JobBlock />
        </SearchPageMain>

    </SearchPageContainer>
);

export default SearchPage;