import { useCount, useDispatchCount } from '../context/Tool'

export default function Home() {
  const count = useCount()
  return (
    <div className="space-y-6">
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
    </div>
  )
}
