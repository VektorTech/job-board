import {
    HeaderWrapper,
    HeaderInner,
    Nav, NavItem,
    Logo
} from './Header.style';

import Link from 'next/link';

const onLoad = () => {
    if(process.browser){
        const session = JSON.parse(localStorage.getItem('session'));
        if(session){
            return session;
        }
        return false;
    }
}
const Header = () => (
    <HeaderWrapper id="#top">
        <HeaderInner>
            <Link href="/"><Logo></Logo></Link>
            <Nav>
                <NavItem><Link href="/"><a>Jobs</a></Link></NavItem>
                <NavItem><Link href="/"><a>Companies</a></Link></NavItem>
                <NavItem><a href="/postjob/postjob">Post a job</a></NavItem>
                <NavItem><Link href="/"><a>Resume Search</a></Link></NavItem>
            </Nav>
            <Nav>
                <NavItem>
                    {
                    onLoad() ? 
                    <>
                    <a href={`/profile/page/${onLoad()['type']}profile`}>{onLoad()['name']}</a>
                    <a href={`/profile/page/${onLoad()['type']}profile`}>{Logout}</a>
                    </>
                    :
                    <a href="/?signin=true">Sign In</a>
                    }
                </NavItem>
            </Nav>
        </HeaderInner>
    </HeaderWrapper>
);

export default Header;