import {
    SearchPageContainer,
    SearchPageMain,
    SearchPageAside,
    SearchTagArea,
    ListItem,
    CheckBox
} from './Search.style';

import JobBlock from '../../src/components/JobBlock/JobBlock';
import TagBlock from '../../src/components/Tag/Tag';
import Heading from '../../src/components/Other/Heading.style';

const asideStruct = {
    "City": [],
    "Categories": [],
    "Job Type": ["Full Time"],
    "Salary Range": []
};

const SearchPage = () => (
    <SearchPageContainer>
        <SearchPageAside>
            <Heading>Current Search</Heading>
            <SearchTagArea>
                <TagBlock type="search">Sales</TagBlock>
                <TagBlock type="search">Cambridge</TagBlock>
            </SearchTagArea>
            
            {Object.keys(asideStruct).map(key => (
                <ul>
                <Heading>Refine by {key}</Heading>
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
            <Heading size="lg">Job Listing</Heading>
            <div style={{marginTop:"2rem"}}>
            <JobBlock />
            <JobBlock />
            <JobBlock />
            <JobBlock />
            </div>
        </SearchPageMain>

    </SearchPageContainer>
);

export default SearchPage;