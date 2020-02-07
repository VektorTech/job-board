import {
    SearchBox,
    Search,
    Select,
    Submit
} from './SearchBar.style';

// import Link from 'next/link';

const SearchBar = ({half}) => (
    <form>
    <SearchBox half={half}>
        <div>
            <Search type="text" placeholder="Search for job posting"/>
        </div>
        <div style={{height: "100%", backgroundColor: "#999"}}></div>
        <div>
        <Select>
            <option>Set Location</option>
        </Select>
        </div>
        <div><Submit>Search</Submit></div>
    </SearchBox>
    </form>
);

export default SearchBar;