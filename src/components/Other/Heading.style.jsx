import styled from 'styled-components';

const HeadingSize = {
    sm: "1rem", med: "2rem", lg: "3rem"
}

const Heading = styled.h1`
    font-weight: bold;
    height: 2.3rem;
    line-height: 2.3rem;
    font-size: ${({size}) => HeadingSize[size] || "1.5rem"};
    margin-bottom: ${({bottom}) => bottom || "1rem"};
    text-align: ${({center}) => center?"center":"left"};
`;

export default Heading;