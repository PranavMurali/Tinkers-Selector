import { useCount, useDispatchCount } from "../context/Tool";
import { ColorSwatchIcon } from "@heroicons/react/outline";
import HeaderItem from "../components/HeaderItem";

export default function Home() {
  const count = useCount();
  console.log(count);
  const dispatch = useDispatchCount();
  const wp = {
    head: count.head,
    hand: count.handle,
    extra: count.extra,
    dmg: count.damage,
    tool: count.tool,
  };

  const handleSave = () => {
    console.log(wp);
    dispatch({
      type: "RESET_TOOL",
      w1: [wp],
    });
  };
  function calcs(wp) {
    switch (wp.tool.Tool) {
      case "Broadsword" || "Longsword" || "Dagger" || "Rapier":
        return wp.head[0].Durability * wp.hand[0].Modifier;
      case "Hammer":
        return (
          (wp.head[0].Durability +
            wp.extra[0].Durability +
            wp.extra[1].Durability) *
          wp.hand[0].Modifier *
          3
        );
      case "Scythe":
        return (
          wp.head[0].Durability *
          2 *
          (wp.hand[0].Modifier + wp.hand[1].Modifier + wp.extra[0].Modifier)
        );
      case "Cleaver":
        return (
          (5.625 *
            ((wp.head[0].Durability + wp.extra[0].Durability) / 2) *
            (wp.hand[0].Modifier + wp.hand[1].Modifier)) /
          2
        );
      case "Shovel" || "Pickaxe":
        return wp.head[0].Durability * wp.hand[0].Modifier;
      case "Mattock":
        return (
          (wp.head[0].Durability + wp.head[1].Durability) *
          0.75 *
          wp.hand[0].Modifier
        );
      case "Lumberaxe" || "Excavator":
        return (
          (wp.head[0].Durability + wp.extra[0].Durability) *
          (wp.extra[0].Modifier + wp.hand[0].Modifier) *
          1.5
        );
      default:
        console.log(`${wp.tool.tool} doenst have a formula yet!`);
    }
  }

  function click(event) {
    event.preventDefault();
    handleSave();
  }
  return (
    <div className="space-y-6 flex flex-row">
      {count?.wps.map((results) => (
        <>
          <div className="flex flex-row">
            <div className="bg-gray-800 rounded shadow border border-black p-6 w-64">
              <h5
                className="text-3xl font-bold mb-4 mt-0"
                key="{results.Material}"
              >
                {results[0].tool.Tool}
              </h5>
              <p className="text-gray-300 text-base">
                {results[0].head.length != 0 ? "Head(s)" : null}
              </p>
              {results[0].head.map((head) => (
                <p className="text-yellow-300 text-sm"> {head.Material}</p>
              ))}
              <p className="text-gray-300 text-base">
                {results[0].hand.length != 0 ? "Handle(s)" : null}
              </p>
              {results[0].hand.map((handle) => (
                <p className="text-yellow-300 text-sm"> {handle.Material}</p>
              ))}
              <p className="text-gray-300 text-base">
                {results[0].extra.length != 0 ? "Extra(s)" : null}
              </p>
              {results[0].extra.map((extra) => (
                <p className="text-yellow-300 text-sm"> {extra.Material}</p>
              ))}
              <p className="text-gray-300 text-base">Damage:</p>
              <p className="text-gray-300 text-base">
                Durability: {calcs(results[0])}
              </p>
              {console.log(calcs(results[0]))}
              {/* IMPLEMENT THE FORMULAS AND DISPLAY STATS IN spereate lines here*/}
            </div>
          </div>
        </>
      ))}
      <button
        type="button"
        className="justify-end"
        onClick={(e) => {
          click(e);
        }}
      >
        <HeaderItem title="Add to Compare" Icon={ColorSwatchIcon} />
      </button>
    </div>
  );
}
