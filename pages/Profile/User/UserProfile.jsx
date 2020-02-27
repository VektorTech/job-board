import {
    PageWrapper, 
    Aside, 
    ImageContainer,
    ContentWrapper,
    Main
} from '../Profile.style';
import Heading from '../../../src/components/Other/Heading.style';

export default () => {
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