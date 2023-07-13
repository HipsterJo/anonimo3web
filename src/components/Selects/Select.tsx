import { IOption, SingleIOptionProps } from "./types"
import React, {useState} from 'react'
import Select, {OnChangeValue, ActionMeta, PropsValue} from 'react-select'
import {selectStyles} from './styles'

const options: IOption[] = [
    { value: 'watching]', label: 'Смотрю' },
    { value: 'favorites', label: 'Любимое' },
    { value: 'planning', label: 'Планнирую' }
]

const SingleSelect: React.FC<SingleIOptionProps> = ({option, currentOption, onChangeOption, placeholder}) => {
    
    const getValue  = () =>{
        if (currentOption){
            return options.find((option) => option.value === currentOption) 
        }
        return null
    }

    const onChange = (option: IOption | null, actionMeta: ActionMeta<IOption>) => {
        onChangeOption(option?.value || '')
    }

    return (
        <div>
            <Select
                value={getValue()}
                onChange={onChange}
                options={options}
                styles={selectStyles}
                placeholder={placeholder}
                isClearable
            />
        </div>
    )
}

export default SingleSelect