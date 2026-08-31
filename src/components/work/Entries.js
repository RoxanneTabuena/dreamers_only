import { entry_info } from './new.work.content'
import { Entry } from './Entry/Entry'
import style from './work.module.css'

export const Entries = ({filterHeight, active}) => {

    let dates = Object.keys(entry_info)
    if(active){
        active.forEach((tag)=>{
        dates = dates.filter((name)=> {
            return entry_info[name].tags.includes(tag)
        })
    })}
    return ( 
        <div className={style.entries}
            style={{paddingTop: filterHeight}}>
            {dates.map((date)=>{
                return <Entry 
                            date={date}
                            entry={entry_info[date]}
                            key={date}
                        />})}
        </div>)}