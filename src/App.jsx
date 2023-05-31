import { Link } from "react-router-dom";
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


                <div className={styles.allVodsContainer}>
                    <h1>Todos los VODS</h1>
                    <div className={styles.allVods}>
                        {vodList.reverse().map(vod => {
                            return (
                                <Link to={`/vod?id=${vod.id}`}>
                                    <img className={styles.vod} src={vod.thumbnail} />
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