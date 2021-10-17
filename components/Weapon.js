import FuzzySearch from 'fuzzy-search';
import { useState } from 'react';

let Weapons=require('../data/Tinkers-tools.json');

const Weapon = ({query}) => {
    const [tool, setTool] = useState(null);
    const searcher = new FuzzySearch(Weapons, ['Tool'], {
        caseSensitive: false,
        sort: true,
      });

    let res = searcher.search(query);
    function click(event, someParameter){
        event.preventDefault();
        setTool(someParameter);
    }

    return (
        <>
        <div className="space-y-6 space-x-2 ml-5">
        {query ? res.map(results => 
        <div className="flex flex-row">
        <div className="bg-purple-600 rounded shadow border border-black p-6 w-64">
            <h5 className="text-3xl font-bold mb-4 mt-0" key="{results.Material}">{results.Tool}</h5>
        <div>
            <p className="text-gray-300 text-base">Head</p>
            <p className="text-yellow-300 text-sm"> {results.Head}</p>
        </div>
        <div>
        <p className="text-gray-300 text-base">Handle</p>
            <p className="text-yellow-300 text-sm"> {results.Handle}</p>
        </div>
        <div>
        <p className="text-gray-300 text-base">Extra</p>
            <p className="text-yellow-300 text-sm"> {results.Extras}</p>
        </div>
        <button className="bg-green-700 rounded shadow border border-black h-10 w-10 text-center self-end" onClick={(e) => {click(e, results.Tool);}}>add</button>

        </div>
        </div>):<h2></h2>}
        </div>
        </>
    )
}

export default Weapon;
