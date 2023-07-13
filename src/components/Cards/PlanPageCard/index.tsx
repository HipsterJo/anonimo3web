import {BiRuble} from 'react-icons/bi'


interface PlanPageCardProps {
    title: string;
    description: string;
    price: string;
}

const PlanPageCard: React.FC<PlanPageCardProps> = ({title, description, price}) => {



    return(
        <div className="grid grid-rows-3 grid-cols-2 cursor-pointer items-center
        overflow-hidden col-span-1 bg-[#312b45] h-[248px]  relative rounded-md
        text-[#7e798f]
        hover:text-[#acaab3]
        hover:bg-[#41395b]
        hover:shadow-[#a5a1b2]-500/50">
            <div className="absolute right-0 top-[-16px] text-7xl font-bold 
            
            ">
                {title}
            </div>
            <div className="text-[#acaab3] text-2xl
            row-span-2 col-span-2
            self-center text-[#acaab3]" >
                {description}
            </div>
            <div className="text-[#d9d5e2] text-3xl self-end col-start-2 row-start-3 justify-self-end
            ">
                <div className='flex'>
                    <p>{price}</p>
                    <BiRuble/>
                </div>
                <p className='text-sm'></p>
            </div>

        </div>
    )

}

export default PlanPageCard