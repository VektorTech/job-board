import {
    PageWrapper, 
    Aside, 
    ImageContainer,
    ContentWrapper,
    Main
} from '../Profile.style';
import Heading from '../../../src/components/Other/Heading.style';

import Auth from '../../Auth';

const UserProfile = ({ name }) => {
    return (
        <PageWrapper>
            <Aside>
                <ImageContainer></ImageContainer>
                <ContentWrapper>
                </ContentWrapper>
            </Aside>

            <Main>
                <ContentWrapper>
                    <Heading size='md'>{name}</Heading>
                </ContentWrapper>
            </Main>
        </PageWrapper>
    );
}

UserProfile.getInitialProps = ctx => {
    return Auth(ctx, 'user');
}

export default UserProfile;