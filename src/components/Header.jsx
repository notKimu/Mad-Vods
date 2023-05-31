import styles from './header.module.css';

export default function Header() {
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
                    <a className={styles.option}>Último directo</a>
                    <a className={styles.option}>About</a>
                </div>
            </header>
            <div className={styles.filler} />
        </>
    )
}