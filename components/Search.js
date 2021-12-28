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
    function reset(){
        setCategory('');
    }
    return (
        <>
        <div class="border border-blue-300 shadow rounded-md p-4 max-w-prose w-full mx-auto sticky top-10">
            <div class="animate-pulse flex space-x-4">
            <div class="flex-1 space-y-6 py-1">
                <div class="text-gray-200">Working on {count.tool}</div>
                <div class="space-y-3">
                <div class="gap-4">
                <div class="text-gray-200">Need {count.headnos - count.head.length} head piece</div>
                <div class="text-gray-200">Need {count.extranos- count.extra.length} extra piece</div>
                <div class="text-gray-200">Need {count.handlenos- count.handle.length} handle piece</div>
                </div>
                <div class="h-2 bg-gray-700 rounded"></div>
                </div>
            </div>
            </div>
        </div>
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
