import {
    PrimaryWrapper,
    InputContainer,
} from './Login.style';

import RegisterCompany from './RegisterCompany';
import RegisterUser from './RegisterUser';

import Button from '../../Buttons/Button';
import { useState } from 'react';

export default ({setRoute}) => {
    const [state, setState] = useState(null);

    const Elem = {
        "company": <RegisterCompany setRoute={setRoute} />,
        "user": <RegisterUser setRoute={setRoute} />
    }
    return ( state ? state :
        <PrimaryWrapper>
            <InputContainer>
            <Button type="Submit" onClick={() => setState(Elem['company'])}>Employer</Button>
            </InputContainer>

            <InputContainer>
            <Button type="Submit" onClick={() => setState(Elem['user'])}>Job Seeker</Button>
            </InputContainer>
        </PrimaryWrapper> );
}