import {
    SearchPageContainer,
    SearchPageMain,
    SearchPageAside,
    SearchTagArea,
    ListItem,
} from './search.style';

import JobBlock from '../../src/components/JobBlock/JobBlock';
import TagBlock from '../../src/components/Tag/Tag';
import Heading from '../../src/components/Other/Heading.style';
import fetch from 'isomorphic-unfetch';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { Banner_1 } from '../../src/components/Banner/Banner';

import Button from '../../src/components/Buttons/Button';

const SearchPage = () => {
    const [state, setState] = useState([]);
    const [params] = useState( process.browser && new URLSearchParams(window.location.search).get('search') );

    const asideStruct = {
        // "City": [""],
        "Categories": ["Aviation", "Arts", "Business", "Law Enforcement", "Media", "Medical", "Service Industry", "Teaching", "Technology", "Other"],
        "Job Type": ["Full Time", "Part TIme"],
        "Salary Range": ["Up to $20,000", "$20,000 - $40,000", "$40,000 - $75,000", "$75,000 - $100,000", "$100,000 - $150,000", "$150,000 - $200,000", "$200,000 - $300,000", "$300,000 - $500,000", "$500,000+"]
    };
    
    const formHandler = e => {
        if(e) e.preventDefault();

        const form = document.forms['refine'];
        const data = {
            // "City": form["City"].value,
            "Categories": form["Categories"].value,
            "Job Type": form["Job Type"].value,
            "Salary Range": form["Salary Range"].value,
            "Search": params
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
    <>
    { params ?
        <Head>
        <title>Job Search: {params}</title>
        </Head> : null
    }
    { state ? <>
    <Banner_1 found={state.length} />
    <SearchPageContainer>
        <SearchPageAside>
        <form name='refine'>
            <Heading>Current Search</Heading>
            <SearchTagArea>
                {process.browser && params ? params.split(' ').map(e => <TagBlock type="search">{e}</TagBlock>) : null}
            </SearchTagArea>
            
            {Object.keys(asideStruct).map( (key, i) => (
                <ul key={i}>
                <Heading>Refine by {key}</Heading>
                {asideStruct[key].map( (item, i) => (
                    <ListItem key={i}>
                    <label style={{paddingLeft:"1rem"}}>
                    <input style={{transform: "translateY(25%)", margin:"0 .5rem"}} type="radio" name={key} value={item} />
                    {item}
                    </label>
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
                state.map( (item, i) => <Link key={i} href={`/ViewJobs/ViewJobs?id=${item.id}`}><a><JobBlock {...item} /></a></Link>)
            }
            </div>
        </SearchPageMain>

    </SearchPageContainer>
    </>: null } </> );
}

export default SearchPage;