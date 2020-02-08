import {
    BlockContainer,
    CompLogoContainer,
    ListItem,
    JobDate, FAI
} from './JobBlock.style';
import TagBlock from '../Tag/Tag';

const JobBlock = () => (
    <BlockContainer>
        <CompLogoContainer>

        </CompLogoContainer>
        <div>
            <h1 style={{height: "2.8rem"}}>Executive Producer</h1>
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