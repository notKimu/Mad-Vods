import { Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styles from "./styles/app.module.css";
import playButton from './files/svg/play.svg'
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
                        <a href={`https://drive.google.com/file/d/${lastVod[0].driveId}/preview`}>
                            <iframe
                                className={styles.lastVod}
                                src={`https://drive.google.com/file/d/${lastVod[0].driveId}/preview`}
                                allow="autoplay"
                                allowFullScreen="true"
                                title="Last VOD"
                            />
                        </a>
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