import {Anime} from '../../../types/Anime';
import {RiClosedCaptioningFill} from 'react-icons/ri'
import {BsFillBookmarkCheckFill} from 'react-icons/bs'
import {BsFillBookmarkDashFill} from 'react-icons/bs'
import { useSelector } from 'react-redux';
import {selectorUser} from '../../../redux/auth/selector';
import Actions from './Actions';
import { useEffect } from 'react';
import {selectGenres} from '../../../redux/anime/selector';
import {getNameGenres} from '../../../utils/func';
import { useState } from 'react';
import { Genre } from '../../../types/Items';
import { Link } from 'react-router-dom';
 

interface CardAnimeIdProps{
    anime: Anime;
    className?: string;
    genres: Genre[];
}


const CardAnimeId:React.FC<CardAnimeIdProps> = ({anime, genres, className})=>{
   
    
    return(
        
        <div className="items-center grid grid-cols-6 bg-[#1B1E22] px-10 py-5 rounded gap-3">
            <div className="col-span-2 flex-col">
                <img
                className="object-cover
                object-top w-[400px]  
                  
                rounded-t"
                src={anime?.imageHuge.split(" ")[0]}
                />
                {
                    <Actions  animeId={anime._id} />
                }
            </div>
            <div className='col-span-4 flex flex-col text-[#8d8d8d]'>
                <h3>{anime.title}</h3>
                <div className="flex items-center  gap-2"> 
                    
                      
                      {anime.subs && <RiClosedCaptioningFill fill= "#5D4FE3"  size={20} viewBox="0 0 23 23"/>}
                      {
                        genres.map((genre, index) => {
                            return (
                                <Link to={`/genre/${genre.param}`} key={index}>
                                    <p className="text-[#5D4FE3]">{genre.name}</p>
                                </Link>
                            )
                        })
                      }
                </div>
               
                <p>{anime.type.toUpperCase()}</p>
                <p>{anime.description}</p>
            </div>
            
        </div>
        
    )
}

export default CardAnimeId