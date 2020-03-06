import {
    HeaderWrapper,
    HeaderInner,
    Nav, NavItem,
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
            <div>
                LOGO
            </div>
            <Nav>
                <NavItem><Link href="/"><a>Jobs</a></Link></NavItem>
                <NavItem><Link href="/"><a>Companies</a></Link></NavItem>
                <NavItem><Link href="/postjob/postjob"><a>Post a job</a></Link></NavItem>
                <NavItem><Link href="/"><a>Resume Search</a></Link></NavItem>
            </Nav>
            <Nav>
                <NavItem>
                    {
                    onLoad() ? 
                    <a href={`/profile/page/${onLoad()['type']}profile`}>{onLoad()['name']}</a>
                    :
                    <a href="/?signin=true">Sign In</a>
                    }
                </NavItem>
            </Nav>
        </HeaderInner>
    </HeaderWrapper>
);

export default Header;