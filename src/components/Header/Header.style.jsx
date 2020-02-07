import styled from 'styled-components';

export const HeaderWrapper = styled.header`
    position: fixed;
    width: 100%;
    height: 7rem;
    background-color: white;
    z-index: 10;
`;

export const HeaderInner = styled.div`
    max-width: 60%;
    height: 100%;
    line-height: 7rem;
    margin: 0 20%;
    display: flex;
    justify-content: space-between;
`;

export const Nav = styled.ul`
    font-size: 1.3rem;
    height: 100%;
    list-style-type: none;
`;

export const NavItem = styled.li`
    padding: 0 1rem;
    display: inline;
`;