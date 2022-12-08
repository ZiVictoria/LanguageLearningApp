import { useState } from 'react';
import style from '../Header/header.module.scss';
import Button from '../Button/button.jsx';
import styleButton from '../Button/button.module.scss';


export default function Header () {
    const [isJoined, setIsJoined] = useState();
    return (  
        <>
            <div className={style.container}>
                <div className={style.header}>
                <div className={style.logo}>
                    <img className={style.logo_img} src="assets/logo/logo.png" alt="logo" />
                </div>
                <div className={style.nav}>
                    <ul className={style.links}>
                        <li>Home</li>
                        <li>Words</li>
                        <li>Cards</li>
                        <li>English levels</li>
                    </ul>
                </div>
                </div>
                <div className={style.header}>"A different language is a different vision of life."</div>
                <div className={style.text}>Give yourself and others the perfect gift of better English skills.</div>
                <div className={styleButton.btnJoin}>
                    <Button className={styleButton.btnJoin} text='Save' />
                </div>
            </div>
        </>
    );
}
