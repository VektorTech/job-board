import {
    PageWrapper, 
    Aside, 
    ImageContainer,
    ContentWrapper,
    Main
} from '../Profile.style';
import Heading from '../../../src/components/Other/Heading.style';

import JWT from 'jsonwebtoken';
import { ACCESS_TOKEN_SECRET } from '../../api/config';
import fetch from 'isomorphic-unfetch';
import Auth from '../../Auth';

const UserProfile = () => {
    return (
        <PageWrapper>
            <Aside>
                <ImageContainer></ImageContainer>
                <ContentWrapper>
                </ContentWrapper>
            </Aside>

            <Main>
                <ContentWrapper>
                    <Heading size='md'>John B</Heading>
                </ContentWrapper>
            </Main>
        </PageWrapper>
    );
}

UserProfile.getInitialProps = ctx => {
    return Auth(ctx);
}

export default UserProfile;