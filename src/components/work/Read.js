
import { Content } from './Content'
import style from './work.module.css'
export const Read = ({handleFlip, info, title}) => {
    const {demo, demoAlt} = info
    return (
        <div>
            <div onClick={handleFlip} className={style.read}>
                <img className={style.background} src={demo} alt={demoAlt}></img>
                <Content info={info} />
            </div>
            </div>)
}