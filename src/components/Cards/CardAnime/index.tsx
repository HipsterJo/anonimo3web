import React from "react";
import { Anime, AnimeProps } from "../../../types/Anime";
import {Link} from 'react-router-dom'
import {RiClosedCaptioningFill} from 'react-icons/ri'
import {MdPlayArrow} from 'react-icons/md'
import A from "../../elements/Link";




const AnimeCard: React.FC<AnimeProps> = ({anime}) => {
  return (
    <div>
      <div className=" max-h-[400px]  ">
        <Link key={anime._id} to={`/anime/${anime._id}`}>
          <div className=" items-start relative">
            <img
              className="object-cover object-top w-full 
              h-[300px]  
              3xl:h-[240px] 
              2xl:h-[240px]
              xl:h-[240px]
              lg:h-[240px]
              md:h-[250px]
              sm:h-[250px]
              little:h-[250px]

               rounded-t"
              src={anime.image}
            />
            <div className="rounded-t bg-gradient-to-t absolute top-0 left-0
            from-black w-full h-full flex flex-col
            justify-center z-50
              items-center py-4 px-2 
                ease-in-out duration-300 opacity-0 hover:opacity-100 ">
              <MdPlayArrow color="white" size ={70}/>
            </div>
            
      
          </div>
        </Link>
        <div className="rounded-b w-full bg-[#242424] flex items-center text-[#7a8282] font-semibold text-sm justify-between rounded">
                  <RiClosedCaptioningFill fill= "#5D4FE3"  size={20} viewBox="0 0 23 23"/>
                  
                  <p className="pr-[2px]">{anime.type.toUpperCase()}</p>    

          </div>
        <div className="mt-1">
            <A href={`/anime/${anime._id}`} text={anime.title} className="text-[#bcbaba] hover:text-[#bcbaba] font-semibold text-sm  "/> 
        </div>
      </div>
    </div>
  );
};

export default AnimeCard;
