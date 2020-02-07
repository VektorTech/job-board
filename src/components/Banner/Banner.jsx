import {
    BannerWrapper,
    BannerContent, 
    BannerContent2 
} from './Banner.style';

import SeachBar from './SearchBar';

export const Banner_1 = () => (
    <>
    <BannerWrapper>
        <BannerContent>
            <h2>120 Jobs Found</h2>
        </BannerContent>
    </BannerWrapper>
    <SeachBar half />
    </>
);

export const Banner_2 = () => (
    <BannerWrapper>
        <BannerContent2>
            <SeachBar />
        </BannerContent2>
    </BannerWrapper>
);