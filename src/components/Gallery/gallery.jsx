import { useState } from "react";
import Card from '../Card/card.jsx';
import datas from '../../data/data.json';
import style from '../Gallery/gallery.module.scss';
// import Button from "../Button/button.jsx";


export default function Gallery() {
    const [count, setCount] = useState(0);
    const [clicked, setClick] = useState(false);

    function getNextCard() {
        let i = count;
        i++;
        if (i === datas.length) {
            setCount(0);

        } else{
            setCount(i);
        }
        setClick(false)
    }

    function getPreviousCard() {
        let i = count;
        if (i === 0) {
            setCount(datas.length - 1);

        } else{
            setCount(i - 1);
        }
        setClick(false)
    }

    return (
        
            <div className={style.card}>
                <button onClick ={getPreviousCard} className={style.btn}>Previous</button>
                <Card
                key = {datas.id}
                english={datas[count].english}
                transcription={datas[count].transcription}
                translation = {datas[count].translation}
                clicked = {clicked}
                setClick = {setClick}
                /> 
                <button onClick={getNextCard} className={style.btn}>Next</button>
            </div>
     
    );
}