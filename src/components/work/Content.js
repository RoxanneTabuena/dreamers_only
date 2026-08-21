
import { Visit } from './Visit'
import style from './work.module.css'
export const Content = ({info}) => {
    const {site, color, logo, title, description} = info
    return (<div className={style.content}>
                    <Visit site={site} color={color} logo={logo} title={title}/>
                    <p>{description}</p>
            </div>
    )
}