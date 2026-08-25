import { useState, useEffect } from 'react'
import { useComponentHeight } from '../../hooks/useComponentHeight'
import style from './cur.module.css'
export const Cur = () => {
    const [letter, setLetter] = useState(20)
    const [curRef, curHeight] = useComponentHeight()
    let cur = ` 
    
Tue Aug 24
Los Angeles
- Take Jane to Work
- Audit Audio Site
- Org in Bev Hills for Shara
- TROVE drop off
- Skatepark
- Make Tortillas

    `.split(`\n`)

    useEffect(()=>{
        setLetter(curHeight/cur.length)
    }, [curHeight, cur.length])

    console.log(letter)
    return (
        <div className={style.cur} ref={curRef}>
            <div style={{fontSize: `${Math.floor(letter)}px`}}>
                {cur.map((l,i)=>{return<p key={i}>{l}</p>})}
            </div>
            <img  className={style.img} src="https://imagehostclub.s3.us-west-1.amazonaws.com/dreamers/carpe.png" alt="carpe diem art"></img>
        </div>
    )
}