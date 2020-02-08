import {
    TagBox,
    SearchTag,
    JobType
} from './Tag.style';

const TagBlock = ({type, children}) => {
    switch(type){
        case "job": return <JobType>{children}</JobType>
        case "search": return <SearchTag>{children}</SearchTag>
        default: return <TagBox>{children}</TagBox>
    }
}; 

export default TagBlock;