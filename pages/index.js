import gloablStyle from './style.global.js';
import Header from '../src/components/Header/Header';
import { Banner_1, Banner_2 } from '../src/components/Banner/Banner';
import Footer from '../src/components/Footer/Footer';
import Head from 'next/head';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

const App = () => {
    return(
        <>
        <Head>
            <style>{gloablStyle}</style>
        </Head>
        <Header />
        <br />
        <Banner_1 />
        <Footer />
        </>
    );
}

export default App;