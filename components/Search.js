import { useState } from "react"
import Results from "./Results"

function Search() {
    const [query, setQuery] = useState('');
    const [category, setCategory] = useState('');
    function click(event, someParameter){
        event.preventDefault();
        setCategory(someParameter);
    }
    function reset(){
        setCategory('');
    }
    return (
        <div className="space-x-2 space-y-1 ml-5">
            <form className="flex sm:flex-row items-center h-auto ml-4">
                <input value={query} type="text" placeholder="Search" className="text-white bg-gray-800 shadow-lg w-screen h-10 " required onChange={event=>setQuery(event.target.value)}/>
                <button type="submit" className="bg-gray-700 w-20 h-10 m-5" onClick={(e) => {reset(e);}}>Reset</button>
            </form>
            <div className="space-x-2">
            <form className="flex sm:flex-row items-center h-auto">
                <button type="cat_head" className="bg-gray-700 w-20 h-10 m-2" onClick={(e) => {click(e, "Head");}}>Head</button>
                <button type="cat_handles" className="bg-gray-700 w-20 h-10 m-2" onClick={(e) => {click(e, "Handle");}}>Handle</button>
                <button type="cat_extras" className="bg-gray-700 w-20 h-10 m-2" onClick={(e) => {click(e, "Extras");}}>Extras</button>
                <button type="cat_all" className="bg-gray-700 w-20 h-10 m-2" onClick={(e) => {click(e, "All");}}>All</button>
            </form>
            </div>
            <div className="flex sm:flex-row m-10 justify-between items-center h-auto">
                <Results category = {category} query={query}/>
            </div>
        </div>
    )
}

export default Search
