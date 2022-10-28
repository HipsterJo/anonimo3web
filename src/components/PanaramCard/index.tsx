import React from "react";
import { Anime, AnimeProps } from "../../types/Anime";
import {Link} from 'react-router-dom'
import {RiClosedCaptioningFill} from 'react-icons/ri'
import {MdPlayArrow} from 'react-icons/md'
import A from "../Link";
import {BsBadgeHdFill} from 'react-icons/bs'
import {BsBadgeCcFill} from 'react-icons/bs'
import {FaMicrophoneAlt} from 'react-icons/fa'
import { Button } from "../Buttons/Button";


const AnimeCard: React.FC<AnimeProps> = ({anime}) => {
  const sliceDescription = anime.description.slice(0, 200) + '...';
  return (
    <div>
      <div className="grid  h-[400px] w-full rounded my-5 justify-between text-[#7a8282] gap-10 pl-10 grid-cols-3 items-center">
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl text-white font-bold">{anime.title}</h1>
          <div className="flex gap-3 text-xl">
            <BsBadgeHdFill/>
            <BsBadgeCcFill/>
            <FaMicrophoneAlt/>            
          </div>
          <p>{sliceDescription}</p>
          <Button title="PLAY NOW" className="text-xl py-2 rounded w-[40%] "/>
          
        </div>

        <div className="col-span-2 right-[0px]">
            <img
              className="object-cover w-full h-[400px] rounded-2xl"
              src={anime.imageHuge}
            />
            
          </div>
      </div>
    </div>
  );
};

export default AnimeCard;
