import Header from "./components/Header";
import thumbnail from "./utils/thumbnail";
import styles from "./styles/app.module.css";
// Vod list
import vods from "./files/vods.json";

function MainPage() {
    // Get the VOD list and last VOD
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
                            src={`https://drive.google.com/file/d/${lastVod[0].driveId}/preview`}
                            allow="autoplay"
                            allowFullScreen="true"
                            title="Last VOD"
                        />
                        <div className={styles.lastVodInfo}>
                            <h2>{lastVod[0].title}</h2>
                            <p>{lastVod[0].description}</p>
                        </div>
                    </div>
                </div>


                <div className={styles.allVodsContainer}>
                    <h1>Todos los VODS</h1>
                    <div className={styles.allVods}>
                        {vodList.reverse().map(vod => {
                            return (thumbnail(vod.title, vod.thumbnail, vod.id));
                        })}
                    </div>
                </div>
            </div>
        </>
    )
};

export default MainPage;