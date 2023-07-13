import {FiUsers} from 'react-icons/fi'
export interface Room{
    _id: string
    title: string
    anime: string
    image: string
    spectators: string
}

interface roomsProps {
    room: Room
}

const RoomCard: React.FC<roomsProps> = ({room}) => {


return (
    //1E1E1F
    
    <div className='h-full cols-span-2  w-full bg-[#1B1E22] grid grid-cols-8   gap-2   text-[#8d8d8d] hover:text-[#5a2e98]'>
            
            <div className=
            'col-span-2 grid grid-cols-2 items-center '>
           
            <div className= 'col-span-2 '>
                    <img
                    className=  "object-cover object-top w-full h-[95px]  "
                    src={room.image}
                    />
            </div>
            </div>
            <div className=
            'col-span-6 flex flex-col my-2'>
                    <h4 className='text-sm font-semibold '>{room.title}</h4>
                    <div className='flex justify-between pr-8 items-center text-[#8d8d8d]'>
                        <p className='text-xs'>{room.anime}</p>
                        <div className='flex items-center gap-2'>
                        <FiUsers color='red'/>
                        <p className='text-xs'>
                            {room.spectators} </p>
                            </div> 
                    </div>
            </div>

    </div>
    )
    
};

export default RoomCard;