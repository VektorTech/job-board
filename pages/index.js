import Header from '../src/components/Header/Header';
import { Banner_1, Banner_2 } from '../src/components/Banner/Banner';
import Footer from '../src/components/Footer/Footer';
import "./style.css";
import { config, library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, fab);

import SearchPage from './Search/Search';

import ViewJob from './ViewJobs/ViewJob.jsx';
import SignModal from '../src/components/Modal/Sign/Sign.jsx';
import PostJob from './PostJob/PostJob';

import Link from 'next/link';

const App = () => {
    return(
        <>
        <SignModal show={true} init='login'></SignModal>
        
        <Header />
        <br />
        <Banner_1 />

        {/* <SearchPage /> */}
        {/* <ViewJob /> */}
        {/* <PostJob /> */}

        <Footer />
        </>
    );
}

export default App;