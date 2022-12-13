import style from '../Button/button.module.scss'

export default function Btn (props) {
    return (
        <button className={style.btnJoin}>{props.text}</button>
    )
}