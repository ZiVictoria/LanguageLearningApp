import { useState } from 'react';
import style from '../Header/header.module.scss';
import Btn from '../Button/btn.jsx';
import styleBtn from '../Button/button.module.scss';


export default function Header () {
    const [isJoined, setIsJoined] = useState();
    return (  
        <>
        <div className={style.wrapper}>
            <div className={style.container}>
                <div className={style.header}>
                    <div className={style.logo}>
                        <img className={style.logo_img} src="assets/logo/logo.png" alt="logo" />
                    </div>
                    <div className={style.nav}>
                        <ul className={style.links}>
                            <li className={style.active}>Home</li>
                            <li>Words</li>
                            <li>Cards</li>
                            <li>English levels</li>
                        </ul>
                    </div>
                </div>
                <div className={style.heading}>
                    <div className={style.cover}>
                        <div className={style.quote}>"A different language is a different vision of life."</div>
                        <div className={style.text}>Give yourself and others the perfect gift of better English skills.</div>
                        <div className={style.btn}>
                            <Btn className={styleBtn.btnJoin} text='Give it a try' />
                        </div>
                    </div>
                    <div className={style.image}>
                        <img className={style.img} src="assets/img/students.jpg" alt="img" />
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}
