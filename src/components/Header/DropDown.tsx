import {CDropdown, CDropdownMenu, CDropdownToggle,CDropdownItem,CDropdownDivider } from '@coreui/react'
import { FiMenu } from "react-icons/fi";
import {CategorItem} from "../../types/Items"

interface DropDownProps {
    categories: CategorItem[];
}


const DropDown: React.FC<DropDownProps>=({categories})=>{
    return (

       <CDropdown>
        <CDropdownToggle className=" bg-transparent border-0 focus:shadow-none shadow-none ">{<FiMenu size= {25}/>}</CDropdownToggle>
        <CDropdownMenu className=" bg-stone-800">
            {categories.map((value) => (
                <CDropdownItem key={value._id} className=" bg-stone-800 hover:bg-[#303030] text-[#7a8282] hover:text-[#7a8282]">{value.name}</CDropdownItem>
            ))}
        
        </CDropdownMenu>
    </CDropdown>
    )
}

export default DropDown;