import { useState } from 'react';
import datas from '../../data/data.json';
import style from '../Words/words.module.scss';
import Button from '../Button/button.jsx';
import styleBtn from '../Button/button.module.scss';
import Input from '../Input/input.jsx';

export default function ListOfWords() {
    const [isEdit, setIsEdit] = useState();

    return(
            <div className={style.table}>
                <div className={style.table__row}>
                    <div className={style.table__title}>Words</div>
                    <div className={style.table__title}>Transcription</div>
                    <div className={style.table__title}>Translation</div>
                </div>
                {datas.map((item, index) =>
                    <div className={style.table__row} key={index} number={index}>
                        <div className={style.table__word}>{isEdit === index ? <Input value={item.english} /> : item.english}</div>
                        <div className={style.table__word}>{isEdit === index ? <Input value={item.transcription} /> : item.transcription}</div>
                        <div className={style.table__word}>{isEdit === index ? <Input value={item.translation} /> : item.translation}</div>
                        <div className={style.buttons}>
                            {isEdit === index ? <Button className={styleBtn.button} onButtonClick={setIsEdit} text='Save' number={index} /> : <Button class={styleBtn.button} onButtonClick={setIsEdit} text='Edit' number={index} />}
                            {isEdit === index ? <Button className={styleBtn.button} onButtonClick={setIsEdit} text='X' number={index} /> : <Button class={styleBtn.button} onButtonClick={setIsEdit} text='X' number={index} />}
                        </div>
                    </div>
                )}
            </div>
        )
}