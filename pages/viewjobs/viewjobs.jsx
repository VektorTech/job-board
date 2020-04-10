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
} from './viewjobs.style';

import TagBlock from '../../src/components/Tag/Tag';
import { CompLogoImg } from '../../src/components/Other/CompanyLogo.style';
import Button from '../../src/components/Buttons/Button';
import Heading from '../../src/components/Other/Heading.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import fetch from 'isomorphic-unfetch';
import { useEffect, useState } from 'react';
import { Banner_2 } from '../../src/components/Banner/Banner';


const ViewJob = () => {
    const [state, setState] = useState();

    useEffect(() => {
        const id = window.location.search.split('=')[1];
        const data = JSON.parse(localStorage.getItem('vacancies')).filter(vacancy => vacancy.id == id);

        setState(data[0]);
    }, []);

    if(state){
        const { title, tags, salary, description, location, start, company } = state;
        const details = {"SALARY": "$"+salary, "START DATE": start, "LOCATION": location};

        return (<>
            <Banner_2/>
            <ViewJobContainer>
                <CompLogo>
                    <CompLogoImg src={company.logo}/>
                    {/* <Ratings>4.9 <FontAwesomeIcon style={{fontSize:'1.8rem'}} icon="star"/></Ratings> */}
                </CompLogo>
                <CompHeading>
                    <Heading style={{height:"fit-content"}} size="lg">
                        {title}
                    </Heading>
        
                    <div>
                        <Heading>{company.name}</Heading>
                    </div>
                    
                    <a href={"https://"+company.website}><Button type="Apply">Apply Now</Button></a>
                    <Button type="Save"><FontAwesomeIcon icon="heart"/> Save</Button>
                </CompHeading>
                <CompDetails>
                    { Object.keys(details).map( key => (
                        <Column key={key}>
                        <Heading size="sm">{key}</Heading>
                        <Nav>
                            <li>{details[key]}</li>
                        </Nav>
                        </Column>
                    ))}
                </CompDetails>
                <CompTagsArea>
                    {
                        tags.split(', ').map(item => <TagBlock type="search">{item}</TagBlock>)
                    }
                </CompTagsArea>
                <JobDescr>
                    {description}
                </JobDescr>
            </ViewJobContainer>
        </>);
    } else return null;
}

export default ViewJob;