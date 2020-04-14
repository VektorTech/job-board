import {
    BlockContainer,
    CompLogoContainer,
    CompanyName, CompanyLocation,
    JobDate, FAI,
    Title, Time
} from './JobBlock.style';
import TagBlock from '../Tag/Tag';
import Heading from '../Other/Heading.style';
import { CompLogoImg } from '../Other/CompanyLogo.style';

const JobBlock = ({ title, location, start, time, company }) => {
    return (
    <BlockContainer>
        <CompLogoContainer>
            <CompLogoImg src={company.logo} size={6.8}/>
        </CompLogoContainer>
        <Title>
            <Heading size="med">{title}</Heading>
        </Title>
        <Time>
            <TagBlock type="job">{time} Time</TagBlock>
            <JobDate><FAI icon="calendar"/>{start}</JobDate>
        </Time>
        <CompanyName>
            <FAI icon="building"/>{company.name}
        </CompanyName>
        <CompanyLocation>
            <FAI icon="map-marker"/>{location}
        </CompanyLocation>
    </BlockContainer>
    );
}

export default JobBlock;