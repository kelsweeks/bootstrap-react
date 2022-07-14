import Nav from "./Nav"
import SearchBar from "./SearchBar"
import {useState} from 'react'

function TopOfSite() {
    const [search, setSearch] = useState("")
    
    return (
        <div className="header">
             <Nav/>
             <SearchBar setSearch={setSearch} search={search} />
        </div>
    )
}
export default TopOfSite

// TopOfSite should include the logo and navbar