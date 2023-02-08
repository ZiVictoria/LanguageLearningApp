import style from '../Header/header.module.scss';
import Btn from '../Button/btn.jsx';
import styleBtn from '../Button/button.module.scss';
import styl from '../Main/main.module.scss';

export default function Main () {
    return (
        <div className={styl.container}>
            <div className={styl.cover}>
                <div className={styl.quote}>"A different language is a different vision of life."</div>
                <div className={styl.text}>Give yourself and others the perfect gift of better English skills.</div>
                <div className={styl.btn}>
                    <Btn className={styleBtn.btnJoin} text='Give it a try' />
                </div>
            </div>
            <div className={styl.image}>
                <img className={styl.img} src="assets/img/students.jpg" alt="img" />
            </div>
        </div>
    )
}