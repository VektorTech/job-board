import {useState, useEffect} from 'react';
import {
    HeaderWrapper,
    HeaderInner,
    Nav, NavItem,
    Logo
} from './Header.style';

import Link from 'next/link';

const Header = () => {
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
                <NavItem><Link href="/"><a>Jobs</a></Link></NavItem>
                <NavItem><Link href="/"><a>Companies</a></Link></NavItem>
                <NavItem><a href="/postjob/postjob">Post a job</a></NavItem>
                <NavItem><Link href="/"><a>Resume Search</a></Link></NavItem>
            </Nav>
            <Nav>
                <NavItem>
                    { session ? 
                    <>
                    <Link href={`/profile/page/${session['type']}profile`}><a>{session['name']}</a></Link>
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