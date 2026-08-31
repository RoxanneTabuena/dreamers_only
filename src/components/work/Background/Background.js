import style from './background.module.css'
export const Background = ({color}) => {
    console.log(color)
    return (
        <div className={style.background} style={{backgroundColor : color}}>

        </div>
    )
}