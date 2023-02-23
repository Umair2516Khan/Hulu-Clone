import HuluLogo from '../public/assets/HuluLogo.png';
import Image from 'next/image';
import HeaderBuilder from './HeaderBuilder';
import { HomeIcon,BadgeCheckIcon,CollectionIcon,LightningBoltIcon,SearchIcon,UserIcon} from "@heroicons/react/outline";

function Header() {
  return (
    <>
    <div className='flex flex-col items-center justify-between sm:flex-row m-5'>
      <div className='flex flex-grow max-w-2xl justify-evenly '>
        <HeaderBuilder Img={HomeIcon} Title="HOME"/>
        <HeaderBuilder Img={LightningBoltIcon} Title="TRENDINGS"/>
        <HeaderBuilder Img={BadgeCheckIcon} Title="VERIFIED"/>
        <HeaderBuilder Img={CollectionIcon} Title="COLLECTIONS"/>
        <HeaderBuilder Img={SearchIcon} Title="SEARCH"/>
        <HeaderBuilder Img={UserIcon} Title="ACCOUNT"/>
      </div>
    <img src="./assets/HuluLogo.png" alt="Hulu logo" style={{"height":"50px","width":"130px"}} className="mb-7"/>
    </div>
    </>
  )
}

export default Header