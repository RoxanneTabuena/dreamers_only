import { FeatureContext } from '../../../../../context/FeatureContext'
import { useContext } from 'react'
import style from './covers.module.css'
export const Covers = ({covers, date}) => {
    const [featureState, featureDispatch] = useContext(FeatureContext)
    const {feature} = featureState
    return (

        <div className={style.covers}>
            {
                covers.length > 1 && feature === date ?
                <img src={covers[1].img} alt={covers[1].alt}/>
                :
                <img src={covers[0].img} alt={covers[0].alt}/>
            }
        </div>

    )
}