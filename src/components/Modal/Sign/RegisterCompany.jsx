import {
    PrimaryWrapper,
    InputContainer,
    Switch, Description
} from './Login.style';

import { InputText } from '../../Other/Input.style';
import Heading from '../../Other/Heading.style';
import Button from '../../Buttons/Button';
import fetch from 'isomorphic-unfetch';

const formHandler = e => {
    e.preventDefault();
    
    const form = document.forms['register'];
    const reader = new FileReader();

    if(form['password'].value !== form['c_password'].value){
        alert("Passwords dont match");
    } else
        reader.readAsDataURL(form['logo'].files[0]);
        
        reader.onload = function(){
            const data = {
                email: form['email'].value,
                password: form['password'].value,
                name: form['name'].value,
                description: form['description'].value,
                website: form['website'].value,
                phone: form['phone'].value,
                address: form['address'].value,
                logo: reader.result,
                type: "company"
            };

            fetch('/api/register', {
                method:"POST",
                body: JSON.stringify(data)
            }).then(res => res.text())
            .then( res => location.reload() );
        }
}

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
        <InputText type='password' name='c_password' placeholder="Confirm Password"/>
        </InputContainer>

        <InputContainer>
        <InputText name='name' placeholder="Company Name" />
        </InputContainer>

        <InputContainer style={{height: '15rem'}}>
        <Description name='description' placeholder='Describe Company'></Description>
        </InputContainer>

        <InputContainer>
        <InputText type='tel' name='phone' placeholder="Phone" />
        </InputContainer>

        <InputContainer>
        <InputText type="url" name='website' placeholder="Website" />
        </InputContainer>

        <InputContainer>
        <InputText name='address' placeholder="Address" />
        </InputContainer>

        <InputContainer>
        <input type="file" name="logo" id="" accept="image/*"/>
        </InputContainer>
        
        <hr style={{margin:'5% 0', height:'.22rem'}} color="#ddd" />

        <InputContainer>
        <Button onClick={formHandler} type="Submit">Create Account</Button>
        </InputContainer>
        </form>

        <Switch onClick={setRoute}>Already have an account?</Switch>

    </PrimaryWrapper>
);