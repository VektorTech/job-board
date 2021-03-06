import {useState, useEffect} from 'react';
import {
    HeaderWrapper,
    HeaderInner,
    Nav, NavItem,
    Logo
} from './Header.style';

import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
    const router = useRouter();

    const [session, setSession] = useState(null)

    useEffect( () => {
        setSession( JSON.parse(localStorage.getItem('session')) ); 
    }, []);

    const Logout = () => {
        const data = localStorage.getItem('session');

        fetch('/api/signout', {
            method:"POST",
            credentials: "same-origin",
            body: JSON.stringify({data, access_token: document.cookie }) 
        }).then(res => {
            localStorage.setItem('session', null);
            location.href = '/';
        });
    }

    return ( <HeaderWrapper id="top">
        <HeaderInner>
            <Link href="/"><Logo></Logo></Link>
            <Nav>
                <NavItem active={router.pathname.includes("/jobs")}><Link href="/"><a>Jobs</a></Link></NavItem>
                <NavItem active={router.pathname.includes("/companies")}><Link href="/"><a>Companies</a></Link></NavItem>
                <NavItem active={router.pathname.includes("/postjob")}><a href="/postjob/postjob">Post a job</a></NavItem>
                <NavItem active={router.pathname.includes("/resumesearch")}><Link href="/"><a>Resume Search</a></Link></NavItem>
            </Nav>
            <Nav>
                <NavItem>
                    { session ? 
                    <>
                    <a href={`/profile/page/${session['type']}profile`}>{session['name']}</a>
                    <button style={{marginLeft:'1rem',border:'none',background:'none',color:'inherit'}} 
                            onClick={Logout}
                            className="logout">Logout</button>
                    </>
                    :
                    <a href="/?signin=true">Sign In</a> }
                </NavItem>
            </Nav>
        </HeaderInner>
    </HeaderWrapper> );
};

export default Header;