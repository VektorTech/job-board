import {
    SearchBox,
    Search,
    Select,
    FAI
} from './SearchBar.style';
import Button from '../Buttons/Button';


// import Link from 'next/link';

const SearchBar = ({half}) => (
    <form>
    <SearchBox half={half}>
        <div>
            <FAI icon="search" />
            <Search type="text" placeholder="Search for job posting"/>
        </div>

        <div style={{height: "100%", backgroundColor: "#999"}}></div>

        <div>
            <FAI icon="compass" />
            <Select>
                <option>Set Location</option>
            </Select>
        </div>
        
        <div><Button type="Search">Search</Button></div>
    </SearchBox>
    </form>
);

export default SearchBar;