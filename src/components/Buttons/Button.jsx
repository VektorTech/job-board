import {
    ButtonDefault,
    SearchSubmit,
    Apply,
    SaveButton
} from './Button.style';

const Button = ({type, children}) => {
    switch(type){
        case "Search": return <SearchSubmit>{children}</SearchSubmit>
        case "Apply": return <Apply>{children}</Apply>
        case "Save": return <SaveButton>{children}</SaveButton>
        default: return <ButtonDefault>{children}</ButtonDefault>
    }
}; 

export default Button;