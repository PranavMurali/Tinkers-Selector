import { useState } from "react"
import Results from "./Results"

function Search() {
    const [query, setQuery] = useState('');
    return (
        <div>
            <form className="flex sm:flex-row m-5 items-center h-auto">
                <input value={query} type="text" placeholder="Search" className="text-white bg-gray-800 shadow-lg w-100 h-10 " required onChange={event=>setQuery(event.target.value)}/>
                <button type="submit" className="bg-gray-700 w-20 h-10">Search</button>
            </form>
            <div className="flex sm:flex-row m-5 justify-between items-center h-auto">
                <Results query={query}/>
            </div>
        </div>
    )
}

export default Search
