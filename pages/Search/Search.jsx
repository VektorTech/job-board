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
import fetch from 'isomorphic-unfetch';
import { useEffect } from 'react';
import Button from '../../src/components/Buttons/Button';

const asideStruct = {
    "City": ["default"],
    "Categories": ["default"],
    "Job Type": ["Full Time"],
    "Salary Range": ["default"]
};

const formHandler = e => {
    e.preventDefault();

    const form = document.forms['refine'];
    const data = {
        "City": form["City"].value,
        "Categories": form["Categories"].value,
        "Job Type": form["Job Type"].value,
        "Salary Range": form["Salary Range"].value
    };

    fetch('/api/get_jobs', {
        method: 'POST',
        body: JSON.stringify( data )
    })
}

const SearchPage = () => {
    return (
    <SearchPageContainer>
        <SearchPageAside>
        <form name='refine'>
            <Heading>Current Search</Heading>
            <SearchTagArea>
                {/* <TagBlock type="search"></TagBlock> */}
            </SearchTagArea>
            
            {Object.keys(asideStruct).map( (key, i) => (
                <ul key={i}>
                <Heading>Refine by {key}</Heading>
                {asideStruct[key].map(item => (
                    <ListItem>
                    <input type="checkbox" name={key} value={item} />
                    <a style={{paddingLeft:"1rem"}} href="/">{item} (1)</a>
                    </ListItem>
                ))}
                </ul>
            ))}
            <Button onClick={formHandler} type="Apply">Submit</Button>
        </form>
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
}
export default SearchPage;