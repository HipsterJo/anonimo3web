import { IOption, MultiIOptionProps } from "./types"
import React, {useState} from 'react'
import Select, {OnChangeValue, ActionMeta, PropsValue} from 'react-select'
import {selectStyles} from './styles'

const options: IOption[] = [
    { value: 'watching]', label: 'Смотрю' },
    { value: 'favorites', label: 'Любимое' },
    { value: 'planning', label: 'Планнирую' }
]

const MultiSelect: React.FC<MultiIOptionProps> = ({options, currentOptions, onChangeOptions, placeholder}) => {
    
    const getValue  = () =>{
        if (currentOptions){
            return currentOptions.map((item) => {
                return options.find((option) => option.value === item) 
            })as PropsValue<IOption>
        }
        return []
    }

    const onChange = (option: readonly IOption[], actionMeta: ActionMeta<IOption>) => {
        onChangeOptions(option.map((item) => item.value))
    }

    return (
        <div>
            <Select
                isMulti
                value={getValue()}
                onChange={onChange}
                options={options}
                styles={selectStyles}
                placeholder={placeholder}
            />
        </div>
    )

}

export default MultiSelect
