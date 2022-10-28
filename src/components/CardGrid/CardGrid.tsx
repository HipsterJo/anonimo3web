import { useSelector } from 'react-redux';
import AnimeCard from '../../components/CardAnime'
import { selectCards } from '../../redux/anime/selector';
import { RootState } from '../../redux/store';
import { Anime } from '../../types/Anime';
import {typeCard} from '../../types/Items'
import {selectRecentlyUpdated} from '../../redux/anime/selector'

interface CardGridProps{
    rows: number;
    className?: string;
    type:typeCard
}

const CardGrid:React.FC<CardGridProps> = ({rows, type, className}) => {
        const cards = useSelector<RootState, Anime[]>(selectRecentlyUpdated)
        return(
            <div className={className}>
                {cards.map((anime, index) => {
                    return(
                        <AnimeCard key={index} anime={anime} />
                    )
                })}
            </div>
        )

}


export default CardGrid;