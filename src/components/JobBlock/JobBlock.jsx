import {
    BlockContainer,
    CompLogoContainer,
    ListItem,
    JobDate, FAI
} from './JobBlock.style';
import TagBlock from '../Tag/Tag';
import Heading from '../Other/Heading.style';
import { CompLogoImg } from '../Other/CompanyLogo.style';

const JobBlock = ({ title, comp_name, location, date, time }) => (
    <BlockContainer>
        <CompLogoContainer>
            <CompLogoImg small/>
        </CompLogoContainer>
        <div>
            <Heading size="med">{title}</Heading>
            <ul style={{marginTop: "1.7rem"}}>
                <ListItem><FAI icon="building"/>{comp_name}</ListItem>
                <ListItem><FAI icon="compass"/>{location}</ListItem>
            </ul>
        </div>
        <div style={{textAlign: "right"}}>
            <TagBlock type="job">{time} Time</TagBlock>
            <JobDate><FAI icon="calendar"/>{date}</JobDate>
        </div>
    </BlockContainer>
);

export default JobBlock;