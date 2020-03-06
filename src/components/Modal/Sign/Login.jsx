import {
    PrimaryWrapper,
    InputContainer,
    Switch
} from './Login.style';

import { InputText } from '../../Other/Input.style';
import Heading from '../../Other/Heading.style';
import Button from '../../Buttons/Button';
import fetch from 'isomorphic-unfetch';

const formHandler = e => {
    e.preventDefault();

    
    const form = document.forms['login'];
    const data = {
        email: form['email'].value,
        password: form['password'].value,
        type: form['type'].value
    };
    
    fetch('/api/signin', {
            method:"POST",
            credentials: "same-origin",
            body: JSON.stringify(data)
        }).then(res => res.json())
          .then(res => {
              document.cookie=`access-token=${res.token}`;
              localStorage.setItem('session', JSON.stringify(res.session_data));
              location.href = '/';
            });
}

export default ({setRoute}) => (
    <PrimaryWrapper>
        <Heading center style={{marginBottom:'4rem'}} size={'lg'}>Login</Heading>

        <InputContainer>
        <Button type="Submit">Social Media</Button>
        </InputContainer>

        <hr style={{margin:'5% 0', height:'.22rem'}} color="#ddd" />
        
        <form name='login'>
        <InputContainer>
        <InputText type='email' name='email' placeholder="Email" />
        </InputContainer>

        <InputContainer>
        <InputText type='password' name='password' placeholder="Password" />
        </InputContainer>

        {/* <div>
        <input type="checkbox" id="remember" name="remember"/>
        <label for="remember">Remember Me</label>
        </div> */}

        <input type='radio' name='type' value='company'/><label>Company</label>
        <input type='radio' name='type' value='user' checked/><label>User</label>

        <InputContainer>
        <Button onClick={formHandler} type="Submit">Sign In</Button>
        </InputContainer>
        </form>

        <Switch onClick={setRoute}>Create Account</Switch>

    </PrimaryWrapper>
);