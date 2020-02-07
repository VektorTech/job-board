import Header from '../src/components/Header/Header';
import { Banner_1, Banner_2 } from '../src/components/Banner/Banner';
import Footer from '../src/components/Footer/Footer';
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
                color: black;
            }

            ul {
                list-style-type: none;
            }

            li {
                margin: 1rem 0;
            }
            `}</style>
        </Head>
        <Header />
        <br />
        <Banner_2 />
        <Footer />
        </>
    );
}

export default App;