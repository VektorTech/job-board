import { Header } from '../src/components/Header';
import Head from 'next/head';

const App = () => {
    return(
        <>
        <Head>
            <style>{`
            * {
                margin: 0;
                pading: 0;
                box-sizing: border-box;
            }

            html {
                font-size:10px;
            }

            a {
                text-decoration: none;
            }
            `}</style>
        </Head>
        <Header />
        </>
    );
}

export default App;