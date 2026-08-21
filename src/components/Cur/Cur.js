import { useState, useEffect } from 'react'
import { useComponentHeight } from '../../hooks/useComponentHeight'
import style from './cur.module.css'
export const Cur = () => {
    const [letter, setLetter] = useState(20)
    const [curRef, curHeight] = useComponentHeight()
    let cur = ` 
    
    Fri Aug 21
    
    - Tidy House
    - Remake Dumplings
    - Marinade Carnitas
    * shop
    * get water
    - Wax

    `.split(`\n`)

    useEffect(()=>{
        setLetter(curHeight/cur.length)
    }, [curHeight, cur.length])

    console.log(letter)
    return (
        <div ref={curRef} className={style.cur} style={{fontSize: `${Math.floor(letter)}px`}}>
            {cur.map((l,i)=>{return<p key={i}>{l}</p>})}
        </div>
    )
}