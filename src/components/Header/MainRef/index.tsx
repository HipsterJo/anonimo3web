import A from '../../Link'
import React from "react";
import {CategorItem} from "../../../types/Items";

type MainRefProps = {
    obj: CategorItem
    className?: string
}
const MainRef:React.FC<MainRefProps> = ({obj, className}) => {
 
    
    return (
      <>
        <A href ={obj.path} text = {obj.name} key = {obj._id} className={className} icon={obj.icon}/>
      
      </>
    );
  };
  
  export default MainRef;