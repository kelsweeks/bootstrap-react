import React from 'react';
// import { useState } from 'react'

function SearchBar({search, setSearch}) {
    return (
        <div className="box">
            <input type="search" id="search" placeholder="Search Movies" onChange={(event) => setSearch(event.target.value)} value={search}/>
        </div>
    )
}
export default SearchBar