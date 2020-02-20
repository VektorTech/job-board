import {
    PrimaryWrapper,
    InputContainer,
    CreateAccount
} from './Login.style';

import Modal from '../core/Modal';
import { InputText } from '../../Other/Input.style';
import Heading from '../../Other/Heading.style';
import Button from '../../Buttons/Button';

export default ({show}) => (
    <Modal show={show}>
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

       <input type="checkbox"/>Remember Me

        <InputContainer>
        <Button type="Submit">Sign In</Button>
        </InputContainer>
        </form>

        <CreateAccount>Create Account</CreateAccount>

    </PrimaryWrapper>
    </Modal>
);