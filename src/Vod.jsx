import Header from "./components/Header";
import styles from "./styles/vod.module.css";

export default function Vod() {
    return (<>
        <Header />

        <div className="container">
            <div className={styles.videoContainer}>
                <iframe
                    className={styles.vod}
                    src="https://drive.google.com/uc?id=18lWDBocj3GkemlwJKl_fqss7yybsxpJD"
                    allow="autoplay"
                    title="Rubius VOD"
                />
                <div className={styles.vodInfo}>
                    <h1>Epic vidio!!!1!</h1>
                    <span>Tremendo directo de la rata noruega no confíe poggers omegalul</span>
                </div>
            </div>
        </div>
    </>)
};