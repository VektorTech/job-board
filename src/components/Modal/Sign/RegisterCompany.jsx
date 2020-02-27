import {
    PrimaryWrapper,
    InputContainer,
    Switch
} from './Login.style';

import { InputText } from '../../Other/Input.style';
import Heading from '../../Other/Heading.style';
import Button from '../../Buttons/Button';

const formHandler = e => {
    e.preventDefault();
    
    const form = document.forms['register'];
    const data = {
        email: form['email'].value,
        password: form['password'].value,
        name: form['name'].value,
        website: form['website'].value,
        phone: form['phone'].value,
        address: form['address'].value,
        logo: form['logo'].value,
        type: "company"
    };
    
    fetch('/api/register', {
            method:"POST",
            body: JSON.stringify(data)
        }).then(res => res.text())
          .then(console.log);
}

export default ({setRoute}) => (
    <PrimaryWrapper>
        <Heading center style={{marginBottom:'4rem'}} size={'lg'}>Register</Heading>

        <InputContainer>
        <Button type="Submit">Social Media</Button>
        </InputContainer>

        <hr style={{margin:'5% 0', height:'.22rem'}} color="#ddd" />
        
        <form>
        <InputContainer>
        <InputText type='email' name='email' placeholder="Email" />
        </InputContainer>

        <InputContainer>
        <InputText type='password' name='password' placeholder="Password"/>
        {/*confirm pw*/}
        </InputContainer>

        <InputContainer>
        <InputText name='phone' placeholder="Phone" />
        </InputContainer>

        <InputContainer>
        <InputText name='website' placeholder="Website" />
        </InputContainer>

        <InputContainer>
        <InputText name='address' placeholder="Address" />
        </InputContainer>

        <InputContainer>
        <input type="file" name="logo" id="" accept="image/*"/>
        </InputContainer>

        <InputContainer>
        <Button onClick={formHandler} type="Submit">Create Account</Button>
        </InputContainer>
        </form>

        <Switch onClick={setRoute}>Already have an account?</Switch>

    </PrimaryWrapper>
);