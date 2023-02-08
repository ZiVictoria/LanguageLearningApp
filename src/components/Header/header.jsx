import style from '../Header/header.module.scss';
import { NavLink } from 'react-router-dom';

let activeStyle = ({isActive}) => isActive ? style.active : style.menu;

export default function Header () {
    return (  
        <>
        <div className={style.container}>
                <div className={style.nav}>
                    <NavLink to='/'  className={activeStyle}>
                        <div className={style.logo}>
                            <img className={style.logo_img} src="assets/logo/logo.png" alt="logo" />
                        </div>
                    </NavLink>
                    <NavLink end to='/' className={activeStyle}>Home</NavLink>
                    <NavLink end to='words' className={activeStyle}>Words</NavLink>
                    <NavLink end to='gallery' className={activeStyle}>Cards</NavLink>
                    {/* <NavLink end to='input' className={style.active}>English levels</NavLink>    */}
                </div>
                </div> 
        </>
    );
}
