import {
    InputContainer,
    JobDescription
} from './PostJob.style';
import { PageContainer } from '../../src/components/Other/PageContainer.style';

import { InputText } from '../../src/components/Other/Input.style';
import Heading from '../../src/components/Other/Heading.style';
import Button from '../../src/components/Buttons/Button';
import fetch from 'isomorphic-unfetch';
import { Banner_2 } from '../../src/components/Banner/Banner';

const formHandler = e => {
    e.preventDefault();
    
    const form = document.forms['post_job'];
    const data = {
        title: form['title'].value,
        category: form['category'].value,
        tags: form['tags'].value,
        salary: form['salary'].value,
        start: form['start'].value,
        time: form['time'].value,
        location: form['location'].value,
        description: form['description'].value,
    };
    
    fetch('/api/post_job', {
            method:"POST",
            credentials: "same-origin",
            body: JSON.stringify(data)
        });//.then(res => location.href = '/');
}

const PostJob = () => {
    return (<>
        <Banner_2 />
        <PageContainer>
            <form name='post_job'>
            <Heading center size='lg' bottom="5rem">Post A Job</Heading>
            <InputContainer> <InputText name='title' placeholder="JOB TITLE" /> </InputContainer>
            <InputContainer> <InputText name='salary' placeholder="SALARY" /> </InputContainer>

            <InputContainer> 
                <label style={{fontSize:'1.5rem'}}>
                Start Date
                <InputText 
                    required
                    style={{width:'50%', marginLeft:'2rem'}} 
                    type='date' name='start' 
                    min={new Date((8.64e+7*5)+Date.now())
                        .toISOString()
                        .split('T')[0]} /> 
                </label>
            </InputContainer>

            <InputContainer style={{lineHeight:'5rem'}}>
            <label style={{fontSize:'1.5rem'}}><input type='radio' value='Full' name='time' defaultChecked /> Full Time</label>
            <label style={{fontSize:'1.5rem',marginLeft:'5rem'}}><input type='radio' value='Part' name='time' /> Part Time</label>
            </InputContainer>

            <InputContainer>
            <Heading size='md'>Select Job Category:</Heading>
            <select name='category'>
                <option value=''>Select Option</option>
                <option value='aviation'>Aviation</option>
                <option value='arts'>Arts</option>
                <option value='business'>Business</option>
                <option value='law enforcement'>Law Enforcement</option>
                <option value='media'>Media</option>
                <option value='medical'>Medical</option>
                <option value='service industry'>Service Industry</option>
                <option value='teaching'>Teaching</option>
                <option value='technology'>Technology</option>
                <option value='other'>Other Options</option>
            </select>
            </InputContainer>

            <InputContainer>
                <InputText name='tags' placeholder="TAGS Example: tag1, tag2, tag3..." />
            </InputContainer>

            <InputContainer> <InputText name='location' placeholder="LOCATION" /> </InputContainer>

            <JobDescription name='description' placeholder='JOB DESCRIPTION'></JobDescription>

            <InputContainer>
                <Button onClick={formHandler} type="Submit">Post Job</Button>
            </InputContainer>
            </form>
        </PageContainer>
    </>);
}

export default PostJob;