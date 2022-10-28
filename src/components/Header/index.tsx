import { useState } from "react";
import {CategorItem} from "../../types/Items"
import DropDown from "./DropDown";
import Input from "../Input";
import A from "../../components/Link"
import Menu from "./Menu";
import menu from "./menu.json"
import {BsFillPersonFill} from "react-icons/bs"

const categories: CategorItem[] = menu.categories
const dropdownContent: CategorItem[] = menu.dropdownContent

type HeaderProps = {
  active: boolean;
  setActive: any;
};


const Header:React.FC<HeaderProps> = ({active, setActive}) => {
  const[search,setSearch] = useState<string>("")
  const handleSearch = (event: any) => {
    setSearch(event.target.value)
  }

  return (
    <div className="sticky flex justify-between top-0 z-10 bg-zinc-900 py-2">
    <div className="text-[#c0cccc]  text-2xl flex relative gap-3 items-center">

    
      <DropDown categories={dropdownContent}/>

      <div className=" flex items-center gap-10 px-2">
        <A href="/" className="text-[#FFFF] hover:text-[#FFFF] text-4xl md:text-4xl font-bold" text="Anonime"/>
      </div>
      <Input value={search} placeholder="Search anime..." onChange={handleSearch}/>
      <Menu items={categories}/>
      
    </div>
    <button onClick={() => setActive(!active)} className="pr-5">
            <BsFillPersonFill size={40} />
          </button>
    </div>
  );
};

export default Header;
