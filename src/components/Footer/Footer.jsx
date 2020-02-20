import {
    FooterWrapper,
    FooterInner,
    Column,
    Copy,
    FAI
} from './Footer.style';
import { Scroll_Top } from '../ScrollToTop/ScrollToTop.jsx';

import Link from 'next/link';


import Heading from '../Other/Heading.style';

const Footer = () => (
    <FooterWrapper>
        <FooterInner>
            <Column>
            <Heading size="med">Home</Heading>
            <ul>
                <li><Link href="/"><a>Contact</a></Link></li>
                <li><Link href="/"><a>About Us</a></Link></li>
                <li><Link href="/"><a>Terms {'&'} Conditions</a></Link></li>
            </ul>
            </Column>

            <Column>
            <Heading size="med">Employer</Heading>
            <ul>
                <li><Link href="/"><a>Post A Job</a></Link></li>
                <li><Link href="/"><a>Search Resumes</a></Link></li>{/*disabled for now*/}
                <li><Link href="/"><a>Sign In</a></Link></li>
            </ul>
            </Column>

            <Column>
            <Heading size="med">Job Seeker</Heading>
            <ul>
                <li><Link href="/"><a>Find Jobs</a></Link></li>
                <li><Link href="/"><a>Create Resumes</a></Link></li>{/*disabled for now*/}
                <li><Link href="/"><a>Sign In</a></Link></li>
            </ul>
            </Column>

            <Column>
            <ul>
                <li><a href="https://www.facebook.com"><FAI size='lg' icon={["fab", "facebook"]}/>Facebook</a></li>
                <li><a href="https://www.twitter.com"><FAI size='lg' icon={["fab", "twitter"]}/>Twitter</a></li>
                <li><a href="https://www.instagram.com"><FAI size='lg' icon={["fab", "instagram"]}/>Instagram</a></li>
                <li><a href="https://www.linkedin.com"><FAI size='lg' icon={["fab", "linkedin"]}/>LinkedIn</a></li>
            </ul>
            </Column>
        </FooterInner>
        <Copy>Copyright 2020 Powered by ???</Copy>
        <Scroll_Top />
    </FooterWrapper>
);

export default Footer;