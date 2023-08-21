import FuzzySearch from "fuzzy-search";
import { useState } from "react";
import { useCount, useDispatchCount } from "../context/Tool";

let Weapons = require("../data/Tinkers-tools.json");

const Weapon = ({ query }) => {
  const [tool, setTool] = useState(null);
  const count = useCount();
  const dispatch = useDispatchCount();

  const handleIncrease = (tool) =>
    dispatch({
      type: "SET_TOOL",
      tool: tool,
    });

  const searcher = new FuzzySearch(Weapons, ["Tool"], {
    caseSensitive: false,
    sort: true,
  });

  let res = searcher.search(query);
  function click(event, tool) {
    event.preventDefault();
    setTool(tool);
    handleIncrease(tool);
  }

  return (
    <>
      <div class="container m-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {query ? (
          res.map((results, index) => (
            <div className="flex flex-row font-semibold" key={index}>
              <div className="bg-gray-800 rounded shadow border border-black p-6 w-64">
                <h5
                  className="text-3xl font-bold mb-4 mt-0"
                  key="{results.Material}"
                >
                  {results.Tool}
                </h5>
                <div className="flex flex-row space-x-2">
                  <p className="text-gray-300 text-base">Attack Speed</p>
                  <p className="text-yellow-300 text-sm"> {results.AttSpd}</p>
                </div>
                <div className="flex flex-row space-x-2">
                  <p className="text-gray-300 text-base">Knockback</p>
                  <p className="text-yellow-300 text-sm">
                    {" "}
                    {results.Knockback}
                  </p>
                </div>
                <div className="flex flex-row space-x-2">
                  <p className="text-gray-300 text-base">Mining Speed</p>
                  <p className="text-yellow-300 text-sm">
                    {" "}
                    {results.MinSpdMod}
                  </p>
                </div>
                <div className="flex flex-row space-x-2">
                  <p className="text-gray-300 text-base">Damage Multiplier</p>
                  <p className="text-yellow-300 text-sm"> {results.DmgMult}</p>
                </div>
                <div className="flex flex-row space-x-2">
                  <p className="text-gray-300 text-base">Damage Modifier</p>
                  <p className="text-yellow-300 text-sm"> {results.DmgMod}</p>
                </div>
                <div className="flex flex-row space-x-2">
                  <p className="text-gray-300 text-base">Durability Modifier</p>
                  <p className="text-yellow-300 text-sm"> {results.DuraMod}</p>
                </div>
                <div className="flex flex-row space-x-2">
                  <p className="text-gray-300 text-base">Bonus Damage</p>
                  <p className="text-yellow-300 text-sm"> {results.BonusDmg}</p>
                </div>
                <div className="flex flex-row space-x-2">
                  <p className="text-gray-300 text-base">Damage Cutoff</p>
                  <p className="text-yellow-300 text-sm">
                    {" "}
                    {results.DmgCutoff}
                  </p>
                </div>
                <p className="text-gray-300 text-base">Parts</p>
                {results.cmps.map((cmp) => (
                  <p className="text-yellow-300 text-sm"> {cmp}</p>
                ))}
                <button
                  className="mt-auto bg-green-700 rounded shadow border border-black h-10 w-full text-center"
                  onClick={(e) => {
                    click(e, results);
                  }}
                >
                  add
                </button>
              </div>
            </div>
          ))
        ) : (
          <h2></h2>
        )}
      </div>
    </>
  );
};

export default Weapon;
