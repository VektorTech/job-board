import {
    PrimaryWrapper,
    InputContainer,
    CreateAccount
} from './Login.style';

import { InputText } from '../../Other/Input.style';
import Heading from '../../Other/Heading.style';
import Button from '../../Buttons/Button';

export default ({setRoute}) => (
    <PrimaryWrapper>
        <Heading style={{textAlign:'center', marginBottom:'4rem'}} size={'lg'}>Login</Heading>

        <InputContainer>
        <Button type="Submit">Social Media</Button>
        </InputContainer>

        <hr style={{margin:'5% 0', height:'.22rem'}} color="#ddd" />
        
        <form>
        <InputContainer>
        <InputText placeholder="Email" />
        </InputContainer>

        <InputContainer>
        <InputText placeholder="Password" />
        </InputContainer>

        <div>
        <input type="checkbox" id="remember" name="remember"/>
        <label for="remember">Remember Me</label>
        </div>

        <InputContainer>
        <Button type="Submit">Sign In</Button>
        </InputContainer>
        </form>

        <CreateAccount onClick={setRoute}>Create Account</CreateAccount>

    </PrimaryWrapper>
);