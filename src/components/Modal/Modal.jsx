import {
    ModalBackDrop,
    ModalContainer,
    ModalWrapper, 
    CloseWrapper
} from './Modal.style';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default props => {
    const [show, setShow] = useState(props.show);

    const render = show ? ( 
        <ModalWrapper>
            <ModalBackDrop onClick={e => setShow(false)} /> 
            <ModalContainer>
                <CloseWrapper>
                    <FontAwesomeIcon 
                        style={{cursor:'pointer'}}
                        onClick={e => setShow(false)}
                        color="#BBB" 
                        size='3x' 
                        icon='times'/>
                </CloseWrapper>
                {props.children}
            </ModalContainer>
        </ModalWrapper>
    ) : null;

    return render;
}