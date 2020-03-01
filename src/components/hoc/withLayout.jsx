import { Component } from 'react';

import Header from '../Header/Header';
import { Banner_1, Banner_2 } from '../Banner/Banner';
import Footer from '../Footer/Footer';

export default (Child) => {
    return class HOC extends Component {
        static getInitialProps = ctx => Child.getInitialProps(ctx);
        render(){
            return(
                <>    
                <Header />
                <br />
                <Banner_1 />
                <Child />
                <Footer />
                </>
            );
        }
    }
}