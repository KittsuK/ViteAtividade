import style from './Menu.module.css'

export default function Menu(){
    return(
        <div className={style.divPrincipal}>
            <p>MENU</p>
            <div className={style.opMenu}>
                <p>
                    <a href={'/'}>Home</a>
                </p>
                <p>
                    <a href={'/tec'}>Tec</a>
                </p>
                <p>
                    <a href={'/calc'}>Calc</a>
                </p>
                <p>
                    <a href={'/contact'}>Contact</a>
                </p>
                <p>
                    <a href={'/'}>Rick and Morty API</a>
                </p>
            </div>
        </div>
    )
}