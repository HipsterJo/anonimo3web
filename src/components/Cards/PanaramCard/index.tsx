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
import { Version1280 } from "./version1280";
import { Version767 } from "./version767";
import { VersionMobile } from "./versionMobile";



const AnimeCard: React.FC<AnimeProps> = ({anime}) => {
  const [width , height] = useWindowDimension()
  
  if (width > 1280) {
    return <Version1280 anime={anime}/>
  }
  if (width > 767) {
    return <Version767 anime={anime}/>
  }
  return <VersionMobile anime={anime}/>
 

};



export default AnimeCard;
