import {
    BlockContainer,
    CompLogoContainer,
    ListItem,
    JobDate, FAI
} from './JobBlock.style';
import TagBlock from '../Tag/Tag';
import Heading from '../Other/Heading.style';
import { CompLogoImg } from '../Other/CompanyLogo.style';

const JobBlock = () => (
    <BlockContainer>
        <CompLogoContainer>
            <CompLogoImg />
        </CompLogoContainer>
        <div>
            <Heading size="med">Executive Producer</Heading>
            <ul style={{marginTop: "1rem"}}>
                <ListItem><FAI icon="building"/>Twitter</ListItem>
                <ListItem><FAI icon="compass"/>Munich</ListItem>
            </ul>
        </div>
        <div style={{textAlign: "right"}}>
            <TagBlock type="job">Full Time</TagBlock>
            <JobDate><FAI icon="calendar"/>April 12, 2020</JobDate>
        </div>
    </BlockContainer>
);

export default JobBlock;