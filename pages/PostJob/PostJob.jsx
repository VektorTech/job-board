import {
    PostJobContainer,
    InputContainer,
    JobTitle,
    Salary,
    StartDate,
    Location,
    TagsContainer,
    JobDescription
} from './PostJob.style';
import { InputText } from '../../src/components/Other/Input.style';
import Heading from '../../src/components/Other/Heading.style';
import Button from '../../src/components/Buttons/Button';
import fetch from 'isomorphic-unfetch';

const formHandler = e => {
    e.preventDefault();
    
    const form = document.forms['post_job'];
    const data = {
        title: form['title'].value,
        category: form['category'].value,
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
    return (
        <PostJobContainer>
            <form name='post_job'>
            <Heading center size='lg' bottom="5rem">Post A Job</Heading>
            <JobTitle> <InputText name='title' placeholder="JOB TITLE" /> </JobTitle>
            <Salary> <InputText name='salary' placeholder="SALARY" /> </Salary>
            <StartDate> <InputText name='start' placeholder="START DATE" /> </StartDate>

            <InputContainer>
            <input type='radio' value='Full' name='time' checked /><label>Full Time</label>
            <input type='radio' value='Part' name='time' /><label>Part Time</label>

            <label>Select Job Category:</label>
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

            <Location> <InputText name='location' placeholder="LOCATION" /> </Location>

            <TagsContainer>

            </TagsContainer>

            <JobDescription name='description' placeholder='JOB DESCRIPTION'></JobDescription>

            <InputContainer>
                <Button onClick={formHandler} type="Submit">Post Job</Button>
            </InputContainer>
            </form>
        </PostJobContainer>
    );
}

export default PostJob;