import styled from 'styled-components';

export const CompLogoImg = styled.img`
    width: ${props => props.small ? "5.5rem":"8rem"};
    height: ${props => props.small ? "5.5rem":"8rem"};
    border: 1px solid #999;
    border-radius: 1.5rem;
`;