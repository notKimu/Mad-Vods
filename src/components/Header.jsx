import { Link } from "react-router-dom";
import styles from './header.module.css';
// Vod list
import vods from "../files/vods.json";


export default function Header() {
    const vodList = Object.values(vods);
    const lastVod = vodList.slice(-1);

    return (
        <>
            <header className={styles.header}>
                <a href='/'>
                    <div className={styles.logo}>
                        <img
                            alt='MadKat logo'
                            className={styles.logoImage}
                            src='/MadKat.png' />
                        <h1 className={`${styles.logoTitle} title`}>Mad Vods</h1>
                    </div>
                </a>

                <div className={styles.options}>
                    <Link to={`/vod?id=${lastVod[0].id}`} className={styles.option}>
                        <p className={styles.option}>Último directo</p>
                    </Link>
                    <a className={styles.option}>About</a>
                </div>
            </header>
            <div className={styles.filler} />
        </>
    )
}