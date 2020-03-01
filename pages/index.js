import "./style.css";
import { config, library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, fab);

import ViewJob from './ViewJobs/ViewJob.jsx';
import SignModal from '../src/components/Modal/Sign/Sign.jsx';

import { useRouter } from 'next/router';
import withLayout from '../src/components/hoc/withLayout';

const App = () => {
    return(
        <>
        { useRouter().query['signin'] ? <SignModal show={true} init='login'></SignModal> : null }
        <ViewJob />
        </>
    );
}

export default App;