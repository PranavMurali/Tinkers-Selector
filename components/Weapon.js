import FuzzySearch from 'fuzzy-search';
import { useState } from 'react';
import { useCount, useDispatchCount } from '../context/Tool'

let Weapons=require('../data/Tinkers-tools.json');

const Weapon = ({query}) => {
    const [tool, setTool] = useState(null);
    const count = useCount()
    const dispatch = useDispatchCount()

    const handleIncrease = (tool,cmps,exnos,hednos,handnos) =>
    dispatch({
        type: 'SET_TOOL',
        tool: tool,
        parts: cmps,
        extranos: exnos,
        headnos: hednos,
        handlenos: handnos,
    })

    const searcher = new FuzzySearch(Weapons, ['Tool'], {
        caseSensitive: false,
        sort: true,
      });

    let res = searcher.search(query);
    function click(event, tool,cmps,exnos,hednos,handnos) {
        event.preventDefault();
        setTool(tool);
        handleIncrease(tool,cmps,exnos,hednos,handnos);
    }

    return (
        <>
        <div className="space-y-6 space-x-2 ml-5">
        {query ? res.map(results => 
        <div className="flex flex-row">
        <div className="bg-purple-600 rounded shadow border border-black p-6 w-64">
            <h5 className="text-3xl font-bold mb-4 mt-0" key="{results.Material}">{results.Tool}</h5>
        <div>
            <p className="text-gray-300 text-base">Attack Speed</p>
            <p className="text-yellow-300 text-sm"> {results.AttSpd}</p>
        </div>
        <div>
            <p className="text-gray-300 text-base">Knockback</p>
            <p className="text-yellow-300 text-sm"> {results.Knockback}</p>
        </div>
        <div>
            <p className="text-gray-300 text-base">Mining Speed</p>
            <p className="text-yellow-300 text-sm"> {results.MinSpdMod}</p>
        </div>
        <div>
            <p className="text-gray-300 text-base">Damage Multiplier</p>
            <p className="text-yellow-300 text-sm"> {results.DmgMult}</p>
        </div>
        <div>
            <p className="text-gray-300 text-base">Damage Modifier</p>
            <p className="text-yellow-300 text-sm"> {results.DmgMod}</p>
        </div>
        <div>
            <p className="text-gray-300 text-base">Durability Modifier</p>
            <p className="text-yellow-300 text-sm"> {results.DuraMod}</p>
        </div>
        <div>
            <p className="text-gray-300 text-base">Bonus Damage</p>
            <p className="text-yellow-300 text-sm"> {results.BonusDmg}</p>
        </div>
        <div>
            <p className="text-gray-300 text-base">Damage Cutoff</p>
            <p className="text-yellow-300 text-sm"> {results.DmgCutoff}</p>
        </div>
        <p className="text-gray-300 text-base">Parts</p>
        {results.cmps.map(cmp =>
            <div>
                <p className="text-yellow-300 text-sm"> {cmp}</p>
            </div>
        )}
        <button className="bg-green-700 rounded shadow border border-black h-10 w-10 text-center self-end" onClick={(e) => {click(e, results.Tool,results.cmps,results.extranos,results.hednos,results.handnos);}}>add</button>

        </div>
        </div>):<h2></h2>}
        </div>
        </>
    )
}

export default Weapon;
