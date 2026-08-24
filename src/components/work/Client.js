import { useIsVisible } from '../../hooks/useIsVisible'
import { useEffect, useState } from 'react'
import { Read } from './Read'
import { Cover } from './Cover'
import { Basic } from './Basic'
import style from './work.module.css'
export const Client = ({title,info,featured,handleSwitch}) => {
    // destructure details
    const {color, tags, launch} = info
    // control which project is being featured
    const refOptions = { options: {threshold: 1}}
    const [bottomRef, bVisible] = useIsVisible(refOptions)
    const [topRef, tVisible] = useIsVisible(refOptions)
    // control project information display
    const [flip, setFlip] = useState(false)
    // feature project on mobile only when both the top and bottom of project container are visible
    useEffect(()=>{
        if(bVisible && tVisible){
            handleSwitch(title)
        }else if(featured){
            handleSwitch(null)
        }
    },[bVisible, tVisible, featured, handleSwitch, title])
    // toggle information display on demand
    const handleFlip = () => {
        setFlip(!flip)
    }
    return (
        <div className={style.client} style={{color: color}}>
            <span ref={topRef} className={style.top}></span>
            {flip || !info.demo ?
                <Read handleFlip={handleFlip} info={info} title={title}/>
                : 
                <Cover handleFlip={handleFlip} featured={featured} title={title} info={info}/>
            }

            <Basic title={title} tags={tags} color={color} launch={launch}/>
            <span ref={bottomRef} className={style.bottom}></span>
        </div>
    )
}