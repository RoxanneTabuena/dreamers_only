import { Basic } from './Basic/Basic'
import { Cover } from './Cover/Cover'
import { Cards } from './Cards/Cards'
import style from './entry.module.css'
export const Entry = () => {
    return (
        <div className={style.entry}>
            <Basic basic={basic}/>
        </div>
    )
}