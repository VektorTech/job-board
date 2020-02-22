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
        <Heading center style={{marginBottom:'4rem'}} size={'lg'}>Register</Heading>

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

        <InputContainer>
        <InputText placeholder="Full Name" />
        </InputContainer>

        <InputContainer>
            <Heading>Sex:</Heading>
            <input type="radio" name="Male" id=""/><label>Male</label>
            <input type="radio" name="Female" id=""/><label>Female</label>
        </InputContainer>

        <InputContainer>
        <InputText placeholder="Phone" />
        </InputContainer>

        <InputContainer>
        <InputText placeholder="Address" />
        </InputContainer>

        <InputContainer>
        <input type="file" name="avatar" id="" accept="image/*"/>
        </InputContainer>

        <InputContainer>
        <Button type="Submit">Create Account</Button>
        </InputContainer>
        </form>

        <CreateAccount onClick={setRoute}>Already have an account?</CreateAccount>

    </PrimaryWrapper>
);