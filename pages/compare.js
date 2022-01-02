import { useCount, useDispatchCount} from '../context/Tool'
import {BanIcon, ColorSwatchIcon} from '@heroicons/react/outline'
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
    handleSave(event);
  }
  return (
    <div className="space-y-6 flex flex-row">
      {count.wps.length >1 && count.wps[0]? count.wps.map(results => 
       <>
        <div className="flex flex-row">
        <div className="bg-purple-600 rounded shadow border border-black p-6 w-64">
            <h5 className="text-3xl font-bold mb-4 mt-0" key="{results.Material}">{results[0].tool}</h5>
        <div>
            <p className="text-gray-300 text-base">Head</p>
            <p className="text-yellow-300 text-sm"> {results[0].head}</p>
        </div>
        <div>
        <p className="text-gray-300 text-base">Handle</p>
            <p className="text-yellow-300 text-sm"> {results[0].hand}</p>
        </div>
        <div>
        <p className="text-gray-300 text-base">Extra</p>
            <p className="text-yellow-300 text-sm"> {results[0].extra}</p>
        </div>
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
