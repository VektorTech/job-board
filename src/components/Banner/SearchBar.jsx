import {
    SearchBox,
    Search,
    Select,
    FAI
} from './SearchBar.style';
import Button from '../Buttons/Button';


// import Link from 'next/link';

const SearchBar = ({half}) => (
    <form action='/search/search'>
    <SearchBox half={half}>
        <div>
            <FAI size='lg' icon="search" />
            <Search type="search" name='search' placeholder="Search for job posting"/>
        </div>

        <div style={{height: "100%", backgroundColor: "#999"}}></div>

        <div>
            <FAI size='lg' icon="map-marker" />
            <Select name='location'>
                <option value=''>Set Location</option>
            </Select>
        </div>
        
        <div><Button type="Search">Search</Button></div>
    </SearchBox>
    </form>
);

export default SearchBar;