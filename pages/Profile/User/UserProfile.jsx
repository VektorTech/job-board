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
import withLayout from '../../../src/components/hoc/withLayout';

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
    try {
        const token = ctx.req.headers.cookie.split('=')[1];
        JWT.verify(token, ACCESS_TOKEN_SECRET, (err, decoded) => {
            if(err){
                throw "";       
            } else {
                console.log("success", decoded);  
            }
        }); 
    } catch(err) {
        ctx.res.write("FORBIDDEN!!!");
        ctx.res.end();
    } finally {
        return {};
    }
}

export default withLayout(UserProfile);