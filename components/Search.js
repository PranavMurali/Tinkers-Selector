import { useState } from "react"
import Results from "./Results"
import { useCount } from '../context/Tool'

function Search() {
    const [query, setQuery] = useState('');
    const [category, setCategory] = useState('');
    const count = useCount()
    function click(event, someParameter){
        event.preventDefault();
        setCategory(someParameter);
    }
    return (
        <>
        <div className="border border-blue-300 shadow rounded-md p-4 max-w-prose w-full mx-auto sticky top-10">
            <div className="animate-pulse flex space-x-4">
            <div className="flex-1 space-y-6 py-1">
                <div className="text-gray-200">Working on {count.tool.Tool !=null ? count.tool.Tool : "Nothing :("}</div>
                <div className="space-y-3">
                <div className="gap-4">
                {count.tool.cmps!=null ? count.tool.cmps.filter(function(e){return e}).map(part => ( 
                    <div className="text-gray-200">Need {part}</div>
                )):null}

                </div>
                <div className="h-2 bg-gray-700 rounded"></div>
                </div>
            </div>
            </div>
        </div>
        <div className="space-x-2 space-y-1 ml-5">
            <form className="flex sm:flex-row items-center h-auto ml-4">
                <input value={query} type="text" placeholder="Search" className="text-white bg-gray-800 shadow-lg w-1/2 h-10 " required onChange={event=>setQuery(event.target.value)}/>
            </form>
            <div className="space-x-2">
            <form className="flex sm:flex-row items-center h-auto">
                <button type="cat_head" className="bg-gray-700 w-20 h-10 m-2" onClick={(e) => {click(e, "Head");}}>Head</button>
                <button type="cat_handles" className="bg-gray-700 w-20 h-10 m-2" onClick={(e) => {click(e, "Handle");}}>Handle</button>
                <button type="cat_extras" className="bg-gray-700 w-20 h-10 m-2" onClick={(e) => {click(e, "Extras");}}>Extras</button>
            </form>
            </div>
            <div className="flex sm:flex-row m-10 justify-between items-center h-auto">
                <Results category = {category} query={query}/>
            </div>
        </div>
        
      </>
    )
}

export default Search;
