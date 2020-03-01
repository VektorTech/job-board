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

UserProfile.getInitialProps = async ctx => {
    const cookies = {};
    try {
        ctx.req.headers.cookie.replace(/\s+/, '').split(';').forEach(element => {
            let temp = element.split("=");
            cookies[temp[0]] = temp[1];
        });

        JWT.verify(cookies['access-token'], ACCESS_TOKEN_SECRET, (err, decoded) => {
            if(err) throw err;
            console.log(decoded);  
        }); 
    } catch(err) {
        const data = await fetch('http://localhost:3000/api/token', {
            method:"POST",
            body: JSON.stringify({ token: cookies['refresh-token'] })
        }).then(res => res.json());

        if(data['err']){
            ctx.res.write('err');
            ctx.res.end();
        } else {
            ctx.res.setHeader('Set-Cookie', `access-token=${data['access-token']}`);
            // ctx.res.end();
        }
    } finally {
        return {};
    }
}

export default UserProfile;