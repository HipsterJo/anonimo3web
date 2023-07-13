import { UserProps} from '../../../types/User';
import { BsFillBookmarkDashFill } from 'react-icons/bs';
import { BsFillBookmarkCheckFill } from 'react-icons/bs';
import {selectorUser} from '../../../redux/auth/selector';
import { useSelector } from 'react-redux';
import SingleSelect from '../../Selects/Select';
import { useState,useEffect } from 'react';
import { useAppDispatch } from '../../../redux/store';
import {addToList} from '../../../redux/auth/authActions';


interface ActionsProps{
    animeId: string;
}

const options = [
    { value: 'watching', label: 'Смотрю' },
    { value: 'favorites', label: 'Любимое' },
    { value: 'planning', label: 'Планнирую' }
]

const Actions: React.FC<ActionsProps> = ({animeId}) => {

    const dispatch = useAppDispatch()
    const [currentOption, setCurrentOption] = useState<string>('');

    const user = useSelector(selectorUser);

    useEffect(() => {
        if (user){
    
    
    if (user?.favorites?.includes(animeId)) {
        setCurrentOption('favorites');
    }
    if (user?.watching?.includes(animeId)) {
        setCurrentOption('watching');
    }
    if (user?.planning?.includes(animeId)) {
        setCurrentOption('planning');
    }
        }
    }, [user])
    
    useEffect(() => {
        if (user){
            if(currentOption == ''){
                dispatch(addToList({animeId, type: "delete"}))
            } else if (currentOption == 'favorites'){
                dispatch(addToList({animeId, type: "favorites"}))
            }
            else if (currentOption == 'watching'){
                dispatch(addToList({animeId, type: "watching"}))
            }
            else if (currentOption == 'planning'){
                dispatch(addToList({animeId, type: "planning"}))
            }
        }
        else{
            setCurrentOption('')
        }
        
    }, [currentOption])
    
    return (
        <div className="flex gap-3 mt-3">
            {   
                <BsFillBookmarkDashFill fill="#CCCCCC" size={80} viewBox="0 0 23 23" />
                
            }
            <SingleSelect option={options} currentOption= {currentOption}
            onChangeOption={setCurrentOption} placeholder="Добавьте в список"/>
        </div>
    );
};

export default Actions;