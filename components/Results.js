import FuzzySearch from 'fuzzy-search';


let Extras=require('../data/Tinkers-Extras.json');
let Handles=require('../data/Tinkers-Handles.json');
let Heads=require('../data/Tinkers-Head.json');
let Traits=require('../data/Tinkers-Traits.json');

function Results({category,query}) {
    const extra_searcher = new FuzzySearch(Extras, ['Material', 'Traits'], {
        caseSensitive: false,
        sort: true,
      });

    const head_searcher = new FuzzySearch(Heads, ['Material', 'Traits'], {
        caseSensitive: false,
        sort: true,
      });

    const handle_searcher = new FuzzySearch(Handles, ['Material', 'Traits'], {
        caseSensitive: false,
        sort: true,
      });

    const Extra = ({query}) => {
        let res =extra_searcher.search(query);
        return(
            <>
            <div className="space-y-6">
            {query ? res.map(results => 
            <div className="flex flex-row">
            <div className="bg-purple-600 rounded shadow border border-black p-6 w-64">
                <h5 className="text-3xl font-bold mb-4 mt-0" key="{results.Material}">{results.Material}</h5>
            <div>
                <p className="text-gray-300 text-base">Traits</p>
                <p className="text-yellow-300 text-sm"> {results.Traits}</p>
            </div>
            <div>
            <p className="text-gray-300 text-base">Durability</p>
                <p className="text-yellow-300 text-sm"> {results.Durability}</p>
            </div>
            </div>
            </div>):<h2></h2>}
            </div>
            </>
        )
    }

    const Head = ({query}) => {
        let res =head_searcher.search(query);
        return(
            <>
            <div className="space-y-6">
            {query ? res.map(results => 
            <div className="flex flex-row">
            <div className="bg-purple-600 rounded shadow border border-black p-6 w-64">
                <h5 className="text-3xl font-bold mb-4 mt-0">{results.Material}</h5>

            <div>
                <p className="text-gray-300 text-base">Traits</p>
                <p className="text-yellow-300 text-sm"> {results.Traits}</p>
            </div>

            <div>
            <p className="text-gray-300 text-base">Durability</p>
                <p className="text-yellow-300 text-sm"> {results.Durability}</p>
            </div>

            <div>
            <p className="text-gray-300 text-base">Mining Level</p>
                <p className="text-yellow-300 text-sm"> {results.Level}</p>
            </div>

            <div>
            <p className="text-gray-300 text-base">Speed</p>
                <p className="text-yellow-300 text-sm"> {results.Speed}</p>
            </div>

            <div>
            <p className="text-gray-300 text-base">Damage</p>
                <p className="text-yellow-300 text-sm"> {results.Damage}</p>
            </div>


            </div>
            </div>):<h2></h2>}
            </div>
            </>
        )
    }

    const Handle = ({query}) => {
        let res =handle_searcher.search(query);
        return(
            <>
            <div className="space-y-6">
            {query ? res.map(results => 
            <div className="flex flex-row">
            <div className="bg-purple-600 rounded shadow border border-black p-6 w-64">
                <h5 className="text-3xl font-bold mb-4 mt-0">{results.Material}</h5>
            <div>
                <p className="text-gray-300 text-base">Traits</p>
                <p className="text-yellow-300 text-sm"> {results.Traits}</p>
            </div>
            <div>
            <p className="text-gray-300 text-base">Modifier(x Times)</p>
                <p className="text-yellow-300 text-sm"> {results.Modifier}</p>
            </div>
            <div>
            <p className="text-gray-300 text-base">Durability</p>
                <p className="text-yellow-300 text-sm"> {results.Durability}</p>
            </div>
            </div>
            </div>):<h2></h2>}
            </div>
            </>
        )
    }

    return (
        <>
        {category === "Extras" ? <Extra query={query}/> : null}
        {category === "Head" ? <Head query={query}/> : null}
        {category === "Handle" ? <Handle query={query}/> : null}
        </>
    )
}

export default Results;