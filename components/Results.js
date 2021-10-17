import FuzzySearch from 'fuzzy-search';

let Extras=require('../data/Tinkers-Extras.json');
let Handles=require('../data/Tinkers-Handles.json');
let Heads=require('../data/Tinkers-Head.json');
let Traits=require('../data/Tinkers-Traits.json');

function Results({query}) {
    const searcher = new FuzzySearch(Extras, ['Material', 'Traits'], {
        caseSensitive: false,
        sort: true,
      });
      console.log(query)
      const res = searcher.search(query);
    return (
        <div>
            {query ? res.map(results => <div>{results.Material}</div>):<h2>asd</h2>}
        </div>
    )
}

export default Results;
