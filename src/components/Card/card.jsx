import { useState } from "react";
import style from '../Card/card.module.scss';


function Card (props) {
    const [clicked, setClick] = useState(props.clicked || false);
    
    const handleClick = () => {
        setClick(true);
    }

    return (
        <div>
            <div className={style.english}>{props.english}</div>
            <div className={style.transcription}>{props.transcription}</div>
            <div className={style.button}>
                {
                    clicked
                        ? <p className={style.translation}>{props.translation}</p>
                        : <button onClick={handleClick} className={style.button}>Translate</button>
                }
            </div>
        </div>
     );
}

export default Card;