import Image from "next/image"
import HeaderItem from './HeaderItem'
import {HomeIcon,SearchIcon,CollectionIcon} from '@heroicons/react/outline'


function Header(){
    return (
        <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
            <div className="flex flex-grow justify-evenly max-w-2xl">
                <HeaderItem title="Home" Icon={HomeIcon}/>
                <HeaderItem title="Search" Icon={SearchIcon}/>
                <HeaderItem title="Compare" Icon={CollectionIcon}/>
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
