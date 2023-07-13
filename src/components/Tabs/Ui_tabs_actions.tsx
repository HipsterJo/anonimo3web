interface tabsLables{
    label:string,
    value:string
}
interface propsActions{
    activeTabIndex:number
    onChildClick:(index:number) => void
}

interface propsType{
    tabs: tabsLables[],
    actions: propsActions
    className?:string
}

export const Ui_tabs_actions: React.FC<propsType> = ({tabs, actions, className}) =>{

  const onClickHolder=(index:number)=>{
    actions.onChildClick(index)
  }
    return(
        <div className={"  rounded-md  " + className}>
        <div className="flex gap-3 ">
        {
        tabs.map((tab, idx) => {
        return (
          <button
            key={idx}
            className={
              idx == actions.activeTabIndex ? 'p-2 duration-300 text-[#a1a1aa] font-semibold   rounded-md  ease-in duration-300'  : 'ease-in duration-300 py-2 font-semibold duration-300 text-[#71717a] hover:text[#a1a1aa] '
            }
            
            onClick={()=>onClickHolder(idx)}
          >
            {tab.label}
          </button>
        );
      })
        }
      </div>

    </div>
    )
}