import FuzzySearch from "fuzzy-search";
import { useCount, useDispatchCount } from "../context/Tool";

let Extras = require("../data/Tinkers-Extras.json");
let Handles = require("../data/Tinkers-Handles.json");
let Heads = require("../data/Tinkers-Head.json");
let Traits = require("../data/Tinkers-Traits.json");

function Results({ category, query }) {
  const count = useCount();
  const dispatch = useDispatchCount();
  const extra_searcher = new FuzzySearch(Extras, ["Material", "Traits"], {
    caseSensitive: false,
    sort: true,
  });

  const head_searcher = new FuzzySearch(Heads, ["Material", "Traits"], {
    caseSensitive: false,
    sort: true,
  });

  const handle_searcher = new FuzzySearch(Handles, ["Material", "Traits"], {
    caseSensitive: false,
    sort: true,
  });

  const Extra = ({ query }) => {
    let res = extra_searcher.search(query);
    const handleIncrease = (event, extra) =>
      dispatch({
        type: "SET_EXTRA",
        extra: extra,
      });
    function click(event, extra) {
      event.preventDefault();
      handleIncrease(event, extra);
    }
    return (
      <>
        <div class="container m-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {res.map((results) => (
            <div className="flex flex-row">
              <div className="bg-gray-800 rounded shadow border border-black p-6 w-64">
                <h5
                  className="text-3xl font-bold mb-4 mt-0"
                  key="{results.Material}"
                >
                  {results.Material}
                </h5>
                <div>
                  <p className="text-gray-300 text-base">Traits</p>
                  <p className="text-yellow-300 text-sm"> {results.Traits}</p>
                </div>
                <div>
                  <p className="text-gray-300 text-base">Durability</p>
                  <p className="text-yellow-300 text-sm">
                    {" "}
                    {results.Durability}
                  </p>
                </div>
                {count.tool.extranos - count.extra.length > 0 ? (
                  <button
                    className="mt-auto bottom-0 bg-green-700 rounded shadow border border-black h-10 w-full text-center"
                    onClick={(e) => {
                      click(e, results);
                    }}
                  >
                    add
                  </button>
                ) : (
                  <></>
                )}
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };

  const Head = ({ query }) => {
    let res = head_searcher.search(query);
    const handleIncrease = (event, head) =>
      dispatch({
        type: "SET_HEAD",
        head: head,
      });
    function click(event, head) {
      event.preventDefault();
      handleIncrease(event, head);
    }
    return (
      <>
        <div class="container m-auto grid grid-cols-7 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {res.map((results) => (
            <div className="flex flex-row">
              <div className="bg-gray-800 rounded shadow border border-black p-6 w-64">
                <h5 className="text-3xl font-bold mb-4 mt-0">
                  {results.Material}
                </h5>

                <div>
                  <p className="text-gray-300 text-base">Traits</p>
                  <p className="text-yellow-300 text-sm"> {results.Traits}</p>
                </div>

                <div>
                  <p className="text-gray-300 text-base">Durability</p>
                  <p className="text-yellow-300 text-sm">
                    {" "}
                    {results.Durability}
                  </p>
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
                {count.tool.hednos - count.head.length > 0 ? (
                  <button
                    className="mt-auto bottom-0 bg-green-700 rounded shadow border border-black h-10 w-full text-center"
                    onClick={(e) => {
                      click(e, results);
                    }}
                  >
                    add
                  </button>
                ) : (
                  <></>
                )}
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };

  const Handle = ({ query }) => {
    let res = handle_searcher.search(query);
    const handleIncrease = (event, handle) =>
      dispatch({
        type: "SET_HANDLE",
        handle: handle,
      });
    function click(event, handle) {
      event.preventDefault();
      handleIncrease(event, handle);
    }

    return (
      <>
        <div class="container m-auto grid grid-cols-7 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {res.map((results) => (
            <div className="flex flex-row">
              <div className="bg-gray-800 rounded shadow border border-black p-6 w-64">
                <h5 className="text-3xl font-bold mb-4 mt-0">
                  {results.Material}
                </h5>
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
                  <p className="text-yellow-300 text-sm">
                    {" "}
                    {results.Durability}
                  </p>
                </div>
                {count.tool.handnos - count.handle.length > 0 ? (
                  <button
                    className="mt-auto bottom-0 bg-green-700 rounded shadow border border-black h-10 w-full text-center"
                    onClick={(e) => {
                      click(e, results);
                    }}
                  >
                    add
                  </button>
                ) : (
                  <></>
                )}
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <>
      {category === "Extras" ? <Extra query={query} /> : null}
      {category === "Head" ? <Head query={query} /> : null}
      {category === "Handle" ? <Handle query={query} /> : null}
    </>
  );
}

export default Results;
