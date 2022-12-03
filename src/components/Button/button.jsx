import style from '../Button/button.module.scss';

function Button (props) {
    return ( 
        <>
            <button className={style.button}>{props.text}</button>
        </>
    );
}

export default Button;

