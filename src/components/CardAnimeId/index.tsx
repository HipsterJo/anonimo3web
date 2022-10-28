import {Anime} from '../../types/Anime';
import {RiClosedCaptioningFill} from 'react-icons/ri'
 

interface CardAnimeIdProps{
    anime: Anime;
    className?: string;
}


const CardAnimeId:React.FC<CardAnimeIdProps> = ({anime, className})=>{
   
    return(
        
        <div className="items-center grid grid-cols-6 bg-[#1B1E22] px-10 py-5 rounded gap-3">
            <div className="col-span-2 r">
                <img
                className="object-cover
                object-top w-[400px]  
                  
                rounded-t"
                src={anime.imageHuge}
                />
            </div>
            <div className='col-span-3 flex flex-col text-[#8d8d8d]'>
                <h3>{anime.title}</h3>
                {anime.subs && <RiClosedCaptioningFill fill= "#5D4FE3"  size={20} viewBox="0 0 23 23"/>}
                <p>{anime.type.toUpperCase()}</p>
                <p>{anime.description}</p>
            </div>
        </div>
        
    )
}

export default CardAnimeId