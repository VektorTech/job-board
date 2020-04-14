import styled from 'styled-components';

const HeadingSize = {
    sm: "1rem", med: "2rem", lg: "3rem"
}

const HeadingSizeMobile = {
    sm: "1rem", med: "1.5rem", lg: "2.5rem"
}

const Heading = styled.h1`
    font-weight: bold;
    height: 2.3rem;
    line-height: 2.3rem;
    font-size: ${({size}) => HeadingSize[size] || "1.5rem"};
    margin-bottom: ${({bottom}) => bottom || "1rem"};
    text-align: ${({center}) => center?"center":"left"};

    @media screen and (max-width: 1024px) {
      font-size: ${({size}) => HeadingSizeMobile[size] || "1.5rem"};
    }
`;

export default Heading;