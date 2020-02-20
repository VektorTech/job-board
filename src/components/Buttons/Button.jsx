import {
    ButtonDefault,
    Submit,
    SearchSubmit,
    Apply,
    SaveButton
} from './Button.style';

const Button = ({type, children}) => {
    switch(type){
        case "Search": return <SearchSubmit>{children}</SearchSubmit>
        case "Submit": return <Submit>{children}</Submit>
        case "Apply": return <Apply>{children}</Apply>
        case "Save": return <SaveButton>{children}</SaveButton>
        default: return <ButtonDefault>{children}</ButtonDefault>
    }
}; 

export default Button;