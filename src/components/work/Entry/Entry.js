import { Basic } from './Basic/Basic'
import { Cover } from './Cover/Cover'
import { Cards } from './Cards/Cards'
import style from './entry.module.css'
export const Entry = ({entry}) => {
    const { basic, covers, cards } = entry
    return (
        <div className={style.entry}>
            <Basic basic={basic}/>
            <Cover cover={covers}/>
            <Cards cards={cards}/>
        </div>
    )
}