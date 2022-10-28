import Col from './Col'


interface CardGridProps{
    className?: string;
    
}

const CardGrid:React.FC<CardGridProps> = ({className}) => {
       
        return(
            <>
                {/* <div className={className}>
                    <div className='h-[90px] '><h5>Новые релизы</h5></div>
                    <Col type="newRealease" />
                </div>

                <div className={className}>
                <div className='h-[90px]'><h5>Недавно добавленные</h5></div>
                    <Col type="newRealease" />
                </div>

                <div className={className}>
                <div className='h-[90px]'><h5>Недавно законченные </h5></div>
                    <Col type="newRealease" />
                </div> */}
          </>
        )

}


export default CardGrid;