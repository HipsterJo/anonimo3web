import React from "react";
import { Anime, AnimeProps } from "../../../types/Anime";
import {Link} from 'react-router-dom'
import {RiClosedCaptioningFill} from 'react-icons/ri'
import {MdPlayArrow} from 'react-icons/md'
import A from "../../elements/Link";
import {BsBadgeHdFill} from 'react-icons/bs'
import {BsBadgeCcFill} from 'react-icons/bs'
import {FaMicrophoneAlt} from 'react-icons/fa'
import { Button } from "../../elements/Buttons/Button";
import { useEffect } from "react";
import { useWindowDimension } from "../../../customHooks/useWindowDimension";
import { sliceFunc } from "../../../utils/func";



export const VersionMobile: React.FC<AnimeProps> = ({anime}) => {
  const sliceDescription = sliceFunc(anime.description, 100);
  const sliceSliceDescription = sliceFunc(anime.description, 50);
  const sliceTitle = sliceFunc(anime.title, 20);

  const [width , height] = useWindowDimension()
  

  return (
    <div>
      <div className="grid  h-[400px] 
        w-full rounded my-5 justify-between text-[#7a8282]
         gap-10 pl-10
          grid-cols-3 items-center
         md:h-[300px]
         md:grid-cols-2
         md:pl-0
         

         

         ">

          {width > 767  && (
            <div className="flex flex-col gap-6">
            {width > 1280 ? (
              <h1 className="text-5xl text-white font-bold">{anime.title}</h1>
            ) : (
              <h1 className="text-3xl text-white font-bold">{sliceTitle}</h1>
            ) 
              }
  
            
            <div className="flex gap-3 text-xl">
              <BsBadgeHdFill/>
              {anime.subs && <BsBadgeCcFill/>}   
              {anime.dubs && <FaMicrophoneAlt/>}
                    
            </div>
           
           {
              width > 1024 ? (
                <p >{sliceDescription} </p>
              ) : (
                <p >{sliceSliceDescription} </p>
              )
           }
            
            {
              width > 1280 ? (
                <Button title="► PLAY NOW" className="text-xl py-2 rounded w-[40%] "/>
              ) : (
                <Button title="► PLAY NOW " className="text-lg py-1 rounded w-[70%] "/>
              )

            }
           
            
          </div>) 

            }
        

        <div className="col-span-2 right-[0px]
       ">
            <img
              className="object-cover w-full h-[400px] md:h-[300px] rounded-2xl
              "
              src={anime?.imageHuge.split(" ")[0]}
            />
            
          </div>
      </div>
    </div>
  );
};

export default VersionMobile;
