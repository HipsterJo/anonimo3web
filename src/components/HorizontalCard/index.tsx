import {Anime, AnimeProps} from '../../types/Anime';
import {RiClosedCaptioningFill} from 'react-icons/ri'
import {RiNumber1, RiNumber2, RiNumber3, RiNumber4, RiNumber5, RiNumber6, RiNumber7, RiNumber8, RiNumber9} from 'react-icons/ri'
import {Link} from 'react-router-dom'

const indexCss= [
        "numberScore-first",
        "numberScore-second",
        "numberScore-third",
        "numberScore",
        "numberScore",
        "numberScore",
        "numberScore",
        "numberScore",
        "numberScore",
]

interface HorizontalCardProps {
        anime: Anime
        index: number
        type?: "withNumber"
}


const HorizontalCard:React.FC<HorizontalCardProps> = ({anime, index, type}) => {
    return (
        //1E1E1F
        <Link key={anime._id} to={`/anime/${anime._id}`}>
        <div className='h-full   w-full bg-[#1B1E22] grid grid-cols-8   gap-2   text-[#8d8d8d] hover:text-[#5a2e98]'>
                
                <div className=
                {type=='withNumber' ?'col-span-3 grid grid-cols-2 items-center':
                'col-span-2 grid grid-cols-2 items-center '}>
               {type=='withNumber' &&
                <div className= 'col-span-1 flex  justify-center '>
                        
                        <span className={indexCss[index-1]}>
                                {index}
                        </span>
                </div>}

                <div className= {type=='withNumber' ?'col-span-1':'col-span-2 '}>
                        <img
                        className= {type=='withNumber' ? "object-cover object-top h-[80px] w-full" : "object-cover object-top w-full h-[95px]  "}
                        src={anime.image}
                        />
                </div>
                </div>
                <div className=
                {type=='withNumber' ?'col-span-5 flex flex-col my-2':
                'col-span-6 flex flex-col my-2'}>
                        <h4 className='text-sm font-semibold '>{anime.title}</h4>
                        <div className='flex justify-between pr-8 items-center text-[#8d8d8d]'>
                                {anime.subs && <RiClosedCaptioningFill color="#6437a8" size="20"/>}
                                <p>{anime.type.toUpperCase()}</p>
                        </div>
                </div>

        </div>
        </Link>
    );
    }

    export default HorizontalCard;