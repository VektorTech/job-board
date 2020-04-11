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
        width: 4rem;
        position: absolute;
        right: 2rem;
        overflow: hidden;

        &:hover {
          /* margin-top: 3rem; */
          height: fit-content;
          background: #fff;
          width: fit-content;
          padding: 0 2%;
          border-radius: 1rem;
          box-shadow: .2rem .2rem 1rem #bbb;
        }
      }
    }
`;

export const NavItem = styled.li`
    padding: 0 1.2rem;
    display: inline;

    @media screen and (max-width: 1024px) {
      padding: 0;
      height: 2rem;
      display: block;
    }
`;