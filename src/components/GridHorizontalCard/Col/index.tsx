import { useSelector } from 'react-redux';
import { selectCards } from '../../../redux/anime/selector';
import { RootState } from '../../../redux/store';
import { Anime } from '../../../types/Anime';
import HorizontalCard from '../../HorizontalCard'
import {typeCard} from '../../../types/Items'
import {selectTopAnime, selectRecentlyUpdated, selectRecentlyAdded, selectRecentlyCompleted} from '../../../redux/anime/selector'

interface CardGridProps{
    type: typeCard
    className?: string;

}

let tempHash: {[key: string]: (state: RootState) => Anime[]} = {
        'topAnime': selectTopAnime,
        'recentlyUpdated': selectRecentlyUpdated,
        'recentlyAdded': selectRecentlyAdded,
        'recentlyCompleted': selectRecentlyCompleted
    
}



const CardGrid:React.FC<CardGridProps> = ({ type, className}) => {
        const cards  = useSelector<RootState, Anime[]>(tempHash[type]) 
        
        return(
            <div className={className +" flex flex-col gap-[9px]"}>
                {cards.map((anime, index) => {
                    return(
                        <HorizontalCard key={index} anime={anime} index={index+1} type="withNumber"/>
                    )
                })}
            </div>
        )

}


export default CardGrid;