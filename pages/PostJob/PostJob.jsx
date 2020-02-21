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

export default () => {
    return (
        <PostJobContainer>
            <Heading center size='lg' bottom="5rem">Post A Job</Heading>
            <JobTitle> <InputText placeholder="JOB TITLE" /> </JobTitle>
            <Salary> <InputText placeholder="SALARY" /> </Salary>
            <StartDate> <InputText placeholder="START DATE" /> </StartDate>
            <Location> <InputText placeholder="LOCATION" /> </Location>
            <TagsContainer></TagsContainer>
            <JobDescription></JobDescription>

            <InputContainer>
                <Button type="submit">Post Job</Button>
            </InputContainer>
        </PostJobContainer>
    );
}