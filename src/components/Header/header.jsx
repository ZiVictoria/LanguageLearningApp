import style from '../Header/header.module.scss';

function Header () {
    return (  
        <>
            <div className={style.container}>
                <div className={style.logo}>
                    <div className={style.img} src="assers/logo/logo.png" alt="logo" />
                    <div className={style.header}>Learning English...</div>
                    <div className={style.text}>could be fun!</div>
                </div>
                <div className={style.nav}>
                    <ul className={style.links}>
                        <li>Home</li>
                        <li>Words</li>
                        <li>Cards</li>
                        <li>Test</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Header;