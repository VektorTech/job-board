import Modal from '../core/Modal';
import Login from './Login';
import Register from './Register';
import { useState } from 'react';

export default ({show, init}) => {
    const [route, setRoute] = useState(init);
    const routeComponent = {
        "login": <Login setRoute={() => setRoute('register')} />, 
        "register": <Register setRoute={() => setRoute('login')} />
    };
    return(
        <Modal show={show}>
            {routeComponent[route]}
        </Modal>
    );
}