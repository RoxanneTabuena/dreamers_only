import { useState, useEffect } from 'react'
import { Cards } from './Cards/Cards'
import { Covers } from './Covers/Covers'
import style from './display.module.css'

export const Display = ({entry, date}) => {
    const [ open, setOpen ] = useState(false)
    const { covers, cards } = entry
    const handleOpen = () => {
        setOpen(true)
    }
    return (
        <div className={style.display} onClick={handleOpen}>
            {open ? 
                <Cards cards={cards}/>
                :
                <Covers covers={covers} date={date}/>
            }
        </div>
    )
}