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
    
    const form = document.forms['register'];
    const data = {
        email: form['email'].value,
        password: form['password'].value,
        name: form['name'].value,
        sex: form['sex'].value,
        phone: form['phone'].value,
        address: form['address'].value,
        avatar: form['avatar'].value,
        type: "user"
    };
    
    fetch('/api/register', {
            method:"POST",
            body: JSON.stringify(data)
        }).then(res => res.text())
          .then( res => location.reload() );
    


    // validator.isEmail(data.email);

    // try {
    //     Object.keys(data).forEach( key => {
    //         if( !patterns[key].test(data[key]) ){
    //             if(form[key].style) form[key].style.border = '1px solid red';
    //             throw new Error(data[key] + ' is invalid.');
    //         } else {
    //             if(form[key].style) form[key].style.border = 'none';
    //         }
    //     } );
    //     console.log('hey');
    // } catch(e) {
    //     console.log(e);
    // }

};

export default ({setRoute}) => (
    <PrimaryWrapper>
        <Heading center style={{marginBottom:'4rem'}} size={'lg'}>Register</Heading>

        
        <form name='register'>
        <InputContainer>
        <InputText type='email' name='email' placeholder="Email" />
        </InputContainer>

        <InputContainer>
        <InputText type='password' name='password' placeholder="Password"/>
        </InputContainer>

        <InputContainer>
        <InputText name='name' placeholder="Full Name"/>
        </InputContainer>

        <InputContainer>
            <Heading>Sex:</Heading>
            <label><input style={{fontSize:'1.5rem'}} type="radio" value='m' name="sex" id=""/> Male</label>
            <label><input style={{fontSize:'1.5rem',marginLeft:'5rem'}} type="radio" value='f' name="sex" id=""/> Female</label>
        </InputContainer>

        <InputContainer>
        <InputText type="tel" name='phone' placeholder="Phone" />
        </InputContainer>

        <InputContainer>
        <InputText name='address' placeholder="Address" />
        </InputContainer>

        <InputContainer>
        <input type="file" name="avatar" id="" accept="image/*"/>
        </InputContainer>

        <hr style={{margin:'5% 0', height:'.22rem'}} color="#ddd" />
        
        <InputContainer>
        <Button onClick={formHandler} type="Submit">Create Account</Button>
        </InputContainer>
        </form>

        <Switch onClick={setRoute}>Already have an account?</Switch>

    </PrimaryWrapper>
);