import {
    PageWrapper, 
    Aside, 
    ImageContainer,
    ContentWrapper,
    Main, TextContainer
} from '../Profile.style';
import Heading from '../../../src/components/Other/Heading.style';

import Auth from '../../Auth';

import Head from 'next/head';

const CompanyProfile = ({ name, email, description, website, phone, address, logo }) => {
    return (
        <>
        <Head><title>Profile: {name}</title></Head>
        <PageWrapper>
            <Aside>
                <ImageContainer image={logo}></ImageContainer>

                <ContentWrapper>
                    <TextContainer>{website}</TextContainer>
                    <TextContainer>{email}</TextContainer>
                </ContentWrapper>
            </Aside>

            <Main>
                <ContentWrapper>
                    <Heading size='lg'>{name}</Heading>

                    <TextContainer>{description}</TextContainer>
                    
                    <TextContainer>{phone}</TextContainer>
                    <TextContainer>{address}</TextContainer>
                </ContentWrapper>
            </Main>
        </PageWrapper>
        </>
    );
}

CompanyProfile.getInitialProps = ctx => {
    return Auth(ctx, 'company');
}

export default CompanyProfile;