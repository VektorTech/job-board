import {
    ViewJobContainer,
    CompLogo,
    CompHeading,
    CompDetails,
    CompTagsArea,
    JobDescr,
    Column,
    Nav,
    Ratings
} from './ViewJob.style';

import TagBlock from '../../src/components/Tag/Tag';
import { CompLogoImg } from '../../src/components/Other/CompanyLogo.style';
import Button from '../../src/components/Buttons/Button';
import Heading from '../../src/components/Other/Heading.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import fetch from 'isomorphic-unfetch';
import { useEffect, useState } from 'react';

const ViewJob = () => {
    const [state, setState] = useState();

    useEffect(() => {
        const id = window.location.search.split('=')[1];
        const data = JSON.parse(localStorage.getItem('vacancies')).filter(vacancy => vacancy.id == id);

        setState(data[0]);
    }, []);

    if(state){
        const { title, category, salary, description, location, time, start, company } = state;
        const details = {"SALARY": "$"+salary, "START DATE": start, "LOCATION": location};

        return (
            <ViewJobContainer>
                <CompLogo>
                    <CompLogoImg src="/"/>
                    {/* <Ratings>4.9 <FontAwesomeIcon style={{fontSize:'1.8rem'}} icon="star"/></Ratings> */}
                </CompLogo>
                <CompHeading>
                    <Heading style={{height:"fit-content"}} size="lg">
                        {title}
                    </Heading>
        
                    <div>
                        <Heading>{company.name}</Heading>
                        <h2><a href="/">{company.website}</a></h2>
                    </div>
                    
                    <Button type="Apply">Apply Now</Button>
                    <Button type="Save"><FontAwesomeIcon icon="heart"/> Save</Button>
                </CompHeading>
                <CompDetails>
                    { Object.keys(details).map( key => (
                        <Column>
                        <Heading size="sm">{key}</Heading>
                        <Nav>
                            <li>{details[key]}</li>
                        </Nav>
                        </Column>
                    ))}
                </CompDetails>
                <CompTagsArea>
                    <TagBlock type="search">Accounting</TagBlock>
                    <TagBlock type="search">Accounting</TagBlock>
                    <TagBlock type="search">Accounting</TagBlock>
                    <TagBlock type="search">Accounting</TagBlock>
                    <TagBlock type="search">Accounting</TagBlock>
                    <TagBlock type="search">Accounting</TagBlock>
                </CompTagsArea>
                <JobDescr>
                    {description}
                </JobDescr>
            </ViewJobContainer>
        );
    } else return null;
}

export default ViewJob;