import globalStyle from './style.js';

import Header from '../src/components/Header/Header';
import { Banner_1, Banner_2 } from '../src/components/Banner/Banner';
import Footer from '../src/components/Footer/Footer';
import Head from 'next/head';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

import SearchPage from './Search';
import ViewJob from './ViewJob.jsx';

const App = () => {
    return(
        <>
        <Head>
            <style>{globalStyle}</style>
        </Head>
        <Header />
        <br />
        <Banner_1 />

        <SearchPage />
        {/* <ViewJob /> */}

        <Footer />
        </>
    );
}

export default App;