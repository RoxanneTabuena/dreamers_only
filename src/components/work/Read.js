
import { Content } from './Content'
import style from './work.module.css'
export const Read = ({handleFlip, info}) => {
    return (
        <div>
            <div onClick={handleFlip} className={style.read}>
                <Content info={info} />
            </div>
            </div>)
}