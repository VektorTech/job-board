import SearchPage from "./Search/Search";
import Head from 'next/head';

const App = () => {
    return(
        <>
        <Head>
            <title>Job Haven</title>
        </Head>
        <SearchPage />
        </>
    );
}

export default App;