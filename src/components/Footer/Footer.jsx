import {
    FooterWrapper,
    FooterInner,
    Column,
    HeadTag,
    Nav, Copy,
    FAI
} from './Footer.style';

import Link from 'next/link';

const Footer = () => (
    <FooterWrapper>
        <FooterInner>
            <Column>
            <HeadTag>Home</HeadTag>
            <Nav>
                <li><Link href="/"><a>Contact</a></Link></li>
                <li><Link href="/"><a>About Us</a></Link></li>
                <li><Link href="/"><a>Terms {'&'} Conditions</a></Link></li>
            </Nav>
            </Column>

            <Column>
            <HeadTag>Employer</HeadTag>
            <Nav>
                <li><Link href="/"><a>Post A Job</a></Link></li>
                <li><Link href="/"><a>Search Resumes</a></Link></li>
                <li><Link href="/"><a>Sign In</a></Link></li>
            </Nav>
            </Column>

            <Column>
            <HeadTag>Job Seeker</HeadTag>
            <Nav>
                <li><Link href="/"><a>Find Jobs</a></Link></li>
                <li><Link href="/"><a>Create Resumes</a></Link></li>
                <li><Link href="/"><a>Sign In</a></Link></li>
            </Nav>
            </Column>

            <Column>
            <Nav>
                <li><a href="https://www.facebook.com"><FAI icon="facebook"/>Facebook</a></li>
                <li><a href="https://www.twitter.com"><FAI icon="twitter"/>Twitter</a></li>
                <li><a href="https://www.instagram.com"><FAI icon="instagram"/>Instagram</a></li>
                <li><a href="https://www.linkedin.com"><FAI icon="linkedin"/>LinkedIn</a></li>
            </Nav>
            </Column>
        </FooterInner>
        <Copy>Copyright 2020 Powered by ???</Copy>
    </FooterWrapper>
);

export default Footer;