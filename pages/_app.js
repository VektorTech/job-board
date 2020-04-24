import "./style.css";
import { config, library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, fab);

import SignModal from '../src/components/Modal/Sign/Sign.jsx';
import Header from '../src/components/Header/Header';
import Footer from '../src/components/Footer/Footer';

import { useRouter } from 'next/router';
import Head from 'next/head';

export default ({ Component, pageProps }) => {
    return (
        <> 
        <Head>
            <link rel='icon' href='/favicon.ico'/>
        </Head>   
        { useRouter().query['signin'] ? <SignModal show={true} init='login'></SignModal> : null }
        <Header />
        <br />
        <Component {...pageProps} />
        <Footer />
        </>
    );
}