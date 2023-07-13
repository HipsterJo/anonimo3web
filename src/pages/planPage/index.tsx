
import PlanPageCard from "../../components/Cards/PlanPageCard"
 
const PlanPage: React.FC = () => {

    return(
        <div className="max-w-[1100px] mx-auto py-6">
            <h3> Уровни подписки</h3>
            <div className="grid grid-cols-3 gap-3">
                <PlanPageCard title="1 " description="Подписка продвинутого уровня  на месяц" price="200"/>
                <PlanPageCard title="6 " description="Подписка продвинутого уровня  на 6 месяцев
                " price="600"/>
                <PlanPageCard title="12" description="Подписка продвинутого уровня  на 12 месяцев
                " price="1000"/>
            </div>
            
        </div>
    )
}

export default PlanPage