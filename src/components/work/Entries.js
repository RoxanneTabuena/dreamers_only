import { useState, useEffect } from 'react'
import { entry_info } from './new.work.content'
import { Entry } from './Entry'
import style from './work.module.css'

export const Entries = ({filterHeight, active}) => {
    const [feature, setFeature ] = useState(null)
    useEffect(()=>{},[feature])
    const handleSwitch = (entry) => {
        setFeature(entry)
    }
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
            {dates.map((entry)=>{
                return <Entry 
                            title={entry}
                            key={entry}
                            info={entry_info[entry]}
                            featured = {feature===entry? true : false}
                            handleSwitch={handleSwitch}
                        />})}
        </div>)}