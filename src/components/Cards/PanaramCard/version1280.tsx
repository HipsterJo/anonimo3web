import React from 'react'
import {useEffect, useState} from 'react'
import {BsBadgeHdFill, BsBadgeCcFill} from 'react-icons/bs'
import {FaMicrophoneAlt} from 'react-icons/fa'
import { Button } from "../../elements/Buttons/Button";
import { useWindowDimension } from "../../../customHooks/useWindowDimension";
import { AnimeProps } from '../../../types/Anime';
import { sliceFunc } from '../../../utils/func';

export const Version1280:React.FC<AnimeProps> = ({anime})=> {
    const sliceDescription = sliceFunc(anime.description, 100);

 

    return (
        <div>
        <div className="grid  h-[400px] 
          w-full rounded my-5 justify-between text-[#7a8282]
           gap-10 pl-10
            grid-cols-3 items-center
           ">
  
            
              <div className="flex flex-col gap-6">
     
                <h1 className="text-5xl text-white font-bold">{anime.title}</h1>
        
    
              
              <div className="flex gap-3 text-xl">
                <BsBadgeHdFill/>
                {anime.subs && <BsBadgeCcFill/>}   
                {anime.dubs && <FaMicrophoneAlt/>}
                      
              </div>
                  <p >{sliceDescription} </p>
               
              
        
                  <Button title="► PLAY NOW" className="text-xl py-2 rounded w-[40%] "/>      
            </div>
  

          
  
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

    )
}