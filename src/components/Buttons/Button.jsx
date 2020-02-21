import {
    ButtonDefault,
    Submit,
    SearchSubmit,
    Apply,
    SaveButton
} from './Button.style';

const Button = ({type, children, onClick}) => {
    switch(type){
        case "Search": return <SearchSubmit onClick={onClick} >{children}</SearchSubmit>
        case "Submit": return <Submit onClick={onClick} >{children}</Submit>
        case "Apply": return <Apply onClick={onClick} >{children}</Apply>
        case "Save": return <SaveButton onClick={onClick} >{children}</SaveButton>
        default: return <ButtonDefault onClick={onClick} >{children}</ButtonDefault>
    }
}; 

export default Button;