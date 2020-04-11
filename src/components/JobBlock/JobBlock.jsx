import {
    BlockContainer,
    CompLogoContainer,
    ListItem, JobDetail,
    JobDate, FAI
} from './JobBlock.style';
import TagBlock from '../Tag/Tag';
import Heading from '../Other/Heading.style';
import { CompLogoImg } from '../Other/CompanyLogo.style';

const JobBlock = ({ title, location, start, time, company }) => {
    return (
    <BlockContainer>
        <CompLogoContainer>
            <CompLogoImg src={company.logo} small/>
        </CompLogoContainer>
        <div>
            <Heading size="med">{title}</Heading>
            <JobDetail>
                <ListItem><FAI icon="building"/>{company.name}</ListItem>
                <ListItem><FAI icon="compass"/>{location}</ListItem>
            </JobDetail>
        </div>
        <div style={{textAlign: "right"}}>
            <TagBlock type="job">{time} Time</TagBlock>
            <JobDate><FAI icon="calendar"/>{start}</JobDate>
        </div>
    </BlockContainer>
    );
}

export default JobBlock;