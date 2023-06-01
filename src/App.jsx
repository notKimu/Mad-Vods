import { Link } from "react-router-dom";
import Header from "./components/Header";
import styles from "./styles/app.module.css";
import playButton from './files/svg/play.svg'
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
                            src={"https://drive.google.com/uc?id=" +lastVod[0].driveId}
                            allow="autoplay"
                            allowFullScreen="true"
                            title="Last VOD"
                        />
                        <div className={styles.lastVodInfo}>
                            <h2>{lastVod[0].title}</h2>
                            <span>{lastVod[0].description}</span>
                        </div>
                    </div>
                </div>


                <div className={styles.allVodsContainer}>
                    <h1>Todos los VODS</h1>
                    <div className={styles.allVods}>
                        {vodList.reverse().map(vod => {
                            return (
                                <Link to={`/vod?id=${vod.id}`} className={styles.singleVod}>
                                    <img alt="VOD from El RubiusOMG" className={styles.vod} src={vod.thumbnail} />
                                    <div className={styles.vodGradient}></div>
                                    <div className={styles.vodTitleContainer}>
                                        <p>{vod.title}</p>
                                    </div>
                                    <div className={styles.playVod}>
                                        <img alt="Play button" className={styles.playButton} src={playButton} />
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>

        </>
    )
};

export default MainPage;