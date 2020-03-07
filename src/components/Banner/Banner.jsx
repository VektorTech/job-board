import {
    BannerWrapper,
    BannerContent, 
    BannerContent2 
} from './Banner.style';

import SearchBar from './SearchBar';

export const Banner_1 = ({found}) => (
    <>
    <BannerWrapper>
        <BannerContent>
            <h2>{found} Jobs Found</h2>
        </BannerContent>
    </BannerWrapper>
    <SearchBar half />
    </>
);

export const Banner_2 = () => (
    <BannerWrapper thin>
        <BannerContent2>
            <SearchBar />
        </BannerContent2>
    </BannerWrapper>
);