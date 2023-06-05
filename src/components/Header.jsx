import { useState } from "react";
import { Link } from "react-router-dom";
import styles from './header.module.css';
// Vod list
import vods from "../files/vods.json";


export default function Header() {
    const [navOpen, setNavOpen] = useState(false);

    function switchNav() {
        setNavOpen(!navOpen);
    }

    // Get the latest VOD to send the user to it
    const vodList = Object.values(vods);


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
                    <Link to={`/vod?id=${vodList.length - 1}`} className={styles.option}>
                        <p>Último directo</p>
                    </Link>
                    <Link to={"/about"} className={styles.option}>
                        <p>About</p>
                    </Link>
                </div>

                <svg
                    className={styles.menu}
                    onClick={switchNav}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#fff"
                    height="70%"
                    viewBox="0 0 24 24">
                    {navOpen ?
                        <path d="M16.561 17.777a.86.86 0 0 0 1.216-1.216l-4.552-4.553 4.552-4.552a.86.86 0 0 0-1.216-1.216l-4.552 4.548L7.456 6.24A.86.86 0 0 0 6.24 7.456l4.548 4.552-4.548 4.553a.86.86 0 0 0 1.216 1.216l4.553-4.552 4.552 4.552Z"></path>
                        :
                        <><path fill-rule="evenodd" clip-rule="evenodd" d="M3.84 6.943C3.84 6.52879 4.17579 6.193 4.59 6.193H19.273C19.6872 6.193 20.023 6.52879 20.023 6.943C20.023 7.35721 19.6872 7.693 19.273 7.693H4.59C4.17579 7.693 3.84 7.35721 3.84 6.943Z"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M3.84 12.201C3.84 11.7868 4.17579 11.451 4.59 11.451H19.273C19.6872 11.451 20.023 11.7868 20.023 12.201C20.023 12.6152 19.6872 12.951 19.273 12.951H4.59C4.17579 12.951 3.84 12.6152 3.84 12.201Z"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M3.84 17.46C3.84 17.0458 4.17579 16.71 4.59 16.71H19.273C19.6872 16.71 20.023 17.0458 20.023 17.46C20.023 17.8742 19.6872 18.21 19.273 18.21H4.59C4.17579 18.21 3.84 17.8742 3.84 17.46Z"></path></>
                    }
                </svg>
            </header>

            {/** The mobile nav */}
            {navOpen && <div className={styles.overlay} onClick={() => setNavOpen(false)} />}
            <div className={`${styles.nav} ${navOpen ? "" : styles.hidden}`}>
                <div className={styles.navOptions}>
                    <Link to={`/vod?id=${vodList.length - 1}`} className={styles.option}>
                        <h3>Último directo</h3>
                    </Link>
                    <Link to={"/about"} className={styles.option}>
                        <h3>About</h3>
                    </Link>
                </div>
            </div>

            <div className={styles.filler} />
        </>
    )
}