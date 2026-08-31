import { useIsVisible } from '../../hooks/useIsVisible'
import { useEffect, useState } from 'react'
import { Basic } from './Basic/Basic'
import { Display } from './Display/Display'
import { useContext } from 'react'
import { FeatureContext } from '../../../context/FeatureContext'
import style from './entry.module.css'

export const Entry = ({date, entry }) => {
    const [featureState, featureDispatch] = useContext(FeatureContext)
    const {feature} = featureState
    const { basic } = entry
    
    // control which project is being featured
    const refOptions = { options: {threshold: 1}}
    const [bottomRef, bVisible] = useIsVisible(refOptions)
    const [topRef, tVisible] = useIsVisible(refOptions)

    // feature project on mobile only when both the top and bottom of project container are visible
    
    useEffect(()=>{
        if(bVisible && tVisible && feature !== date ){
            const action = { type: "UPDATE", payload: date}
            featureDispatch(action)
        }
    },[bVisible, tVisible, date, feature, featureDispatch])

    return (
        <div className={style.entry}>
            <span ref={topRef} className={style.top}></span>
                <Basic basic={basic}/>
                <Display entry={entry}/>
            <span ref={bottomRef} className={style.bottom}></span>
        </div>
    )
}