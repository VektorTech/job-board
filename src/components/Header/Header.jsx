import {
    HeaderWrapper,
    HeaderInner,
    Nav, NavItem,
} from './Header.style';

import Link from 'next/link';

const Header = () => (
    <HeaderWrapper>
        <HeaderInner>
            <div>
                LOGO
            </div>
            <Nav>
                <NavItem><Link href="/"><a>Jobs</a></Link></NavItem>
                <NavItem><Link href="/"><a>Companies</a></Link></NavItem>
                <NavItem><Link href="/"><a>Post a job</a></Link></NavItem>
                <NavItem><Link href="/"><a>Resume Search</a></Link></NavItem>
                <NavItem><Link href="/"><a>Pricing</a></Link></NavItem>
            </Nav>
            <Nav>
                <NavItem><Link href="/"><a>Sign In</a></Link></NavItem>
                <span>|</span>
                <NavItem><Link href="/"><a>Sign Up</a></Link></NavItem>
            </Nav>
        </HeaderInner>
    </HeaderWrapper>
);

export default Header;