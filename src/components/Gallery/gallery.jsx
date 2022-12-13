import { useState } from "react";
import Card from '../Card/card.jsx';
import data from '../../data/data.json';
import style from '../Gallery/gallery.module.scss';
// import Button from "../Button/button.jsx";
import styleCont from '../Header/header.module.scss';


export default function CardsGallery() {
    const [count, setCount] = useState(0);

    function getNextCard() {
        let i = count;
        i++;
        if (i===15) {
            setCount(1);

        } else{
            setCount(i);
        }
    }

    function getPreviousCard() {
        let i = count;
        i--;
        console.log(i);
        if (i=== -1) {
            setCount(14);

        } else{
            setCount(i);
        }
    }

    return (
        <div className={styleCont.container}>
            <div className={style.card}>
                <button onClick ={getPreviousCard} className={style.btn}>Previous</button>
                <Card
                key = {data.id}
                english={data[count].english}
                transcription={data[count].transcription}
                translation = {data[count].translation}
                /> 
                <button onClick={getNextCard} className={style.btn}>Next</button>
            </div>
        </div>
    );
}