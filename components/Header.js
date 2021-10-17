import Image from "next/image"
import HeaderItem from './HeaderItem'
import {HomeIcon,SearchIcon,CollectionIcon} from '@heroicons/react/outline'
import { useRouter } from 'next/router'

function Header(){
    const router = useRouter()
    const handleClick = (e) => {
        e.preventDefault()
        router.push(href)
      }
    return (
        <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
            <div className="flex flex-grow justify-evenly max-w-2xl">

                <button type="button" onClick={() => router.push('/')}>
                <HeaderItem title="Home" Icon={HomeIcon}/>
                </button>

                <button type="button" onClick={() => router.push('/search')}>
                <HeaderItem title="Search" Icon={SearchIcon}/>
                </button>

                <button type="button" onClick={() => router.push('/compare')}>
                <HeaderItem title="Compare" Icon={CollectionIcon}/>
                </button>

            </div>
            <Image
            className="object-contain" 
            src={"https://static.wikia.nocookie.net/tinkers-construct/images/1/17/TinkersConstructLogo.png/revision/latest/scale-to-width-down/600?cb=20160513015104"} alt='logo' 
            width={200}
            height={100}/>
        </header>
    )
}

export default Header
