
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {selectorUser} from "../../../redux/auth/selector";

import {useAppDispatch} from '../../../redux/store' 
import { Waifu } from "../../../types/Waifu";
import { Anime } from "../../../types/Anime";
import s from "./index.module.css"
import { fetchUserAnime } from "../../../redux/anime/cardActions";
import AnimeCard from "../../Cards/CardAnime";


interface IModalProps{
    active:boolean;
    type: number;
   
    setActive:()=>void;
}
// Можно создать топ вайфу, надо считать сколько людей добавило вайфу в избранное

export const CustomModal:React.FC<IModalProps> = ({ active, type,  setActive }) => {

    const dispatch = useAppDispatch();
    const user = useSelector(selectorUser);
    const [topWaifu, setTopWaifu] = useState<Waifu[]>([]);
    const [topAnime, setTopAnime] = useState<Anime[]>([]);

 
            

    return(
        <>
        </>
    )
    
}

 
   