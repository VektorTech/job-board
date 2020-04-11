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
              if(res.err){
                  const flash = document.getElementsByClassName('flash-err')[0];
                  flash.style.color = "red";
                  flash.style.fontSize = "1.2rem";
                  flash.innerText = "Invalid Credentials";
                } else {
                document.cookie=`access-token=${res.token}`;
                localStorage.setItem('session', JSON.stringify(res.session_data));
                location.href = '/';
              }
            });
}

export default ({setRoute}) => (
    <PrimaryWrapper>
        <Heading center style={{marginBottom:'4rem'}} size={'lg'}>Login</Heading>

        
        <form name='login'>
        <InputContainer>
        <InputText type='email' name='email' placeholder="Email" defaultValue="jobs@apple.com" />
        </InputContainer>

        <InputContainer>
        <InputText type='password' name='password' placeholder="Password" defaultValue="Apple123" />
        </InputContainer>

        <label><input style={{fontSize:'1.5rem'}} type='radio' name='type' value='company' defaultChecked/> Company</label>
        <label><input style={{fontSize:'1.5rem',marginLeft:'5rem'}} type='radio' name='type' value='user'/> User</label>

        <hr style={{margin:'5% 0', height:'.22rem'}} color="#ddd" />

        <InputContainer>
        <Button onClick={formHandler} type="Submit">Sign In</Button>
        </InputContainer>
        <p className='flash-err'></p>
        </form>

        <Switch onClick={setRoute}>Create Account</Switch>

    </PrimaryWrapper>
);