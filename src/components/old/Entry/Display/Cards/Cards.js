import { Article } from './Article/Article'
import { Links } from './Links/Links'
import { Log } from './Log/Log'
import { Slide } from './Slide/Slide'
import { Text } from './Text/Text'
import style from './cards.module.css'
export const Cards = ({cards}) => {
    const deck = cards.map((card,i)=>{
        let type = card.type
        switch (type) {

            case "article": {
            return <Article key={i} card={cards[card]}/>
            }

            case "links": {
            return <Links key={i} card={cards[card]}/>
            }

            case "text": {
            return <Text key={i} card={cards[card]}/>
            }

            case "log": {
            return <Log key={i} card={cards[card]}/>
            }
        
            default:
            return <Slide key={i} card={cards[card]}/>;
        }
    })
    return (
        <div className={style.cards}>
            {deck}
        </div>
    )
}