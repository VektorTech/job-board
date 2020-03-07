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
import { useEffect, useState } from 'react';
import Link from 'next/link';

import Button from '../../src/components/Buttons/Button';

const SearchPage = () => {
    const [state, setState] = useState([]);

    const asideStruct = {
        "City": [""],
        "Categories": ["Aviation", "Arts", "Business", "Law enforcement", "Media", "Medical", "Service Industry", "Teaching", "Technology", "Other"],
        "Job Type": ["Full Time", "Part TIme"],
        "Salary Range": ["Up to $20,000", "$20,000 - $40,000", "$40,000 - $75,000", "$75,000 - $100,000", "$100,000 - $150,000", "$150,000 - $200,000", "$200,000 - $300,000", "$300,000+"]
    };
    
    const formHandler = e => {
        if(e) e.preventDefault();
    
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
        }).then(res=>res.json()).then(res => {
            localStorage.setItem('vacancies', JSON.stringify(res))
            setState(res);
        });
    }

    useEffect(formHandler, []);

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
                    <input style={{transform: "translateY(25%)", marginLeft:"1rem"}} type="radio" name={key} value={item} />
                    <label style={{paddingLeft:"1rem"}}>{item}</label>
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
            {
                state.map(item => <Link href={`/ViewJobs/ViewJob?id=${item.id}`}><a><JobBlock {...item} /></a></Link>)
            }
            </div>
        </SearchPageMain>

    </SearchPageContainer>
    );
}
export default SearchPage;