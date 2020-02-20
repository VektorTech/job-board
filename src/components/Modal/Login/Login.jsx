import {
    PrimaryWrapper,
    InputContainer
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
        <InputText placeholder="Email" />
        </InputContainer>

        <InputContainer>
        <InputText placeholder="Password" />
        </InputContainer>

        <InputContainer>
        <Button type="Submit">Sign In</Button>
        </InputContainer>


    </PrimaryWrapper>
    </Modal>
);