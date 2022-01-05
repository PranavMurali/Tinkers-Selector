import { useCount, useDispatchCount} from '../context/Tool'
import {ColorSwatchIcon, DownloadIcon} from '@heroicons/react/outline'
import HeaderItem from '../components/HeaderItem'

export default function Home() {
  const count = useCount()
  const dispatch = useDispatchCount()
  const wp ={
    "tool":count.tool,
    "head":count.head,
    "hand":count.handle,
    "extra":count.extra,
    "dmg":count.damage,
  }

  const handleSave = () =>
  dispatch({
  type: 'RESET_TOOL',
  w1: [wp],
  })

  function click(event){
    event.preventDefault();
    console.log("dons");
    handleSave(event);
    console.log(count);
  }
  return (
    <div className="space-y-6 flex flex-row">
      {count.wps.length >=1 ? count.wps.map(results => 
       <>
        <div className="flex flex-row">
          <div className="bg-purple-600 rounded shadow border border-black p-6 w-64">
              <h5 className="text-3xl font-bold mb-4 mt-0" key="{results.Material}">{results[0].tool}</h5>
              <p className="text-gray-300 text-base">{results[0].head.length!=0 ? "Head(s)" : null}</p>
              {results[0].head.map(head =>
                  <p className="text-yellow-300 text-sm"> {head}</p>
              )}
              <p className="text-gray-300 text-base">{results[0].hand.length!=0 ? "Handle(s)" : null}</p>
              {results[0].hand.map(handle =>
                  <p className="text-yellow-300 text-sm"> {handle}</p>
              )}
              <p className="text-gray-300 text-base">{results[0].extra.length!=0 ? "Extra(s)" : null}</p>
              {results[0].extra.map(extra =>   
                  <p className="text-yellow-300 text-sm"> {extra}</p>
              )}
              <p className="text-gray-300 text-base">Damage: {results[0].dmg}</p>
              <p className="text-gray-300 text-base">Durability: {results[0].dura}</p>
          </div>
        </div>
        </> ):
        <>
        <div className="flex flex-row">
        <div className="bg-purple-600 rounded shadow border border-black p-6 w-64">
            <h5 className="text-3xl font-bold mb-4 mt-0" key="{results.Material}">sdf</h5>
        <div>
            <p className="text-gray-300 text-base">Head</p>
            <p className="text-yellow-300 text-sm">dfg</p>
        </div>
        <div>
        <p className="text-gray-300 text-base">Handle</p>
            <p className="text-yellow-300 text-sm"> sdf</p>
        </div>
        <div>
        <p className="text-gray-300 text-base">Extra</p>
            <p className="text-yellow-300 text-sm"> dgf</p>
        </div>
        </div>
        </div>
        </> 
      }
        <button type="button" className="justify-end"  onClick={(e) => {click(e);}}>
            <HeaderItem title="Add to Compare" Icon={ColorSwatchIcon}/>
        </button>
    </div>
  )
}
