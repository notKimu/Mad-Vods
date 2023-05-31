import Header from "./components/Header";
import styles from "./styles/app.module.css";
// Vod list
import vods from "./files/vods.json";

function MainPage() {
    const vodList = Object.values(vods);
    const lastVod = vodList.slice(-1);

    return (
        <>
            <Header />

            <div className="container">
                <div className={styles.lastVodContainer}>
                    <h1>Último VOD</h1>
                    <div className={styles.lastVodPlayer}>
                        <iframe
                            className={styles.lastVod}
                            src={lastVod[0].url}
                            allow="autoplay"
                            title="Last VOD"
                        />
                        <div className={styles.lastVodInfo}>
                            <h2>{lastVod[0].title}</h2>
                            <span>{lastVod[0].description}</span>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
};

export default MainPage;