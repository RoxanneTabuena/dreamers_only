import { NavButton } from '../../../../blocks/NavButton'
import style from './basic.module.css'
export const Basic = ({date, basic}) => {
    const {title, tags, color, description} = basic
    return (<div className={style.basic}>
                <div className={style.title}>
                    <h3>{date}</h3>
                    <h3>{title}</h3>
                </div>
                <div className={style.tags}>
                    {tags.map((tag, i)=>{
                        return <NavButton 
                        key={tag} 
                        fontSize="mini" 
                        path={`/work/${tag}`} 
                        text={`${tag}${i===tags.length-1 ? '' : ','}`} 
                        textColor={color} 
                        backgroundColor="transparent"
                        font='Titles'
                        />
                    })}
                </div>
                <p>{description}</p>
            </div>)
}