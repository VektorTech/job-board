import {
    BlockContainer,
    CompLogoContainer,
    JobType, ListItem,
    JobDate, FAI
} from './JobBlock.style';

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
        <div>
            <JobType>Full Time</JobType>
            <JobDate><FAI icon="calendar"/>April 12, 2020</JobDate>
        </div>
    </BlockContainer>
);

export default JobBlock;