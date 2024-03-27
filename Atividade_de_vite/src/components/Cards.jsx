import style from './Cards.module.css'
import Draggable from 'react-draggable';

export default function Cards(props){
    return(
        <Draggable>
            <div className={style.card}>
                <h2>{props.title}</h2>
                <img src={props.imgSrc} alt={props.title} width={100} height={'auto'}/>
                <p>{props.desc}</p>
            </div>
        </Draggable>
    )
}