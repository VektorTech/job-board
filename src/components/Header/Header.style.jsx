import styled from 'styled-components';

export const HeaderWrapper = styled.header`
    position: fixed;
    width: 100%;
    height: 7rem;
    background-color: white;
    white-space: nowrap;
    z-index: 10;
`;

export const HeaderInner = styled.div`
    max-width: 60%;
    height: 100%;
    line-height: 7rem;
    margin: 0 20%;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 1024px) {
        justify-content: space-around;
    }
`;

export const Logo = styled.div`
    width: 10rem;
    background: url(/logo.png) no-repeat center;
    background-size: contain;
`;

export const Nav = styled.ul`
    font-size: 1.3rem;
    height: 100%;
    list-style-type: none;

    @media screen and (max-width: 1024px) {
      &:nth-of-type(1){
        position: absolute;
        margin: 2.5rem 0 0 0; 
        height: 0;       
      }
    }
`;

export const NavItem = styled.li`
    padding: 0 1.2rem;
    display: inline;
    ${({active}) => active ? "border-bottom: .3rem solid #093669;" : ""}
`;