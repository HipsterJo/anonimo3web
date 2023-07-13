import React from 'react'
import Tabs from '../../Tabs'
import { typeCard} from '../../../types/Items'

type Props = {
    children: React.ReactNode
    title: string
    className?: string
    type:typeCard
    onChildClick:(index:number) => void
    activeTabIndex:number
}

export default function index({children, title, className, type, onChildClick, activeTabIndex}: Props) {
  return (
    <div className='flex flex-col w-full'>
        <div className={'flex justify-between ' + className}>
        <h3>{title}</h3>
        <Tabs type={type} onChildClick = {onChildClick} activeTabIndex={activeTabIndex}/>
        </div>
        {children}
    </div>
  )
}