import { useCount, useDispatchCount} from '../context/Tool'
import {ColorSwatchIcon} from '@heroicons/react/outline'
import HeaderItem from '../components/HeaderItem'

export default function Home() {
  const count = useCount()
  const dispatch = useDispatchCount()
  const handleSave = () =>
  dispatch({
  type: 'RESET_TOOL',
  w1: [count.tool,count.head,count.handle,count.extra,count.damage],
  })
  function click(event){
    event.preventDefault();
    handleSave(event);
}
  return (
    <div className="space-y-6 flex flex-row">
            <div className="flex flex-row">
            <div className="bg-purple-600 rounded shadow border border-black p-6 w-64">
                <h5 className="text-3xl font-bold mb-4 mt-0" key="{results.Material}">{count.tool}</h5>
            <div>
                <p className="text-gray-300 text-base">Head</p>
                <p className="text-yellow-300 text-sm"> {count.head}</p>
            </div>
            <div>
            <p className="text-gray-300 text-base">Handle</p>
                <p className="text-yellow-300 text-sm"> {count.handle}</p>
            </div>
            <div>
            <p className="text-gray-300 text-base">Extra</p>
                <p className="text-yellow-300 text-sm"> {count.extra}</p>
            </div>
            </div>
            </div>
            <button type="button" className="justify-end"  onClick={(e) => {click(e);}}>
                <HeaderItem title="Add to Compare" Icon={ColorSwatchIcon}/>
            </button>
            {console.log(count.wps)}
    </div>
  )
}
