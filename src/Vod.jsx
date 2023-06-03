import { Link, useSearchParams } from "react-router-dom";
import Header from "./components/Header";
import styles from "./styles/vod.module.css";
import thumbnail from "./utils/thumbnail";
import animeQuestion from "./files/img/animeQuestion.png";
// Vod list
import vods from "./files/vods.json";

export default function Vod() {
    const [searchParams] = useSearchParams();
    let vodId, vodList, vodToPlay;
    // Get what VOD to play
    vodId = searchParams.get('id');
    vodList = Object.values(vods);
    vodToPlay = vodList[vodId];
    if (vodId === null) {
        vodToPlay = vodList.slice(-1)[0];
        vodId = vodToPlay.id;
    }

    return (<>
        <Header />

        <div className="container">
            {vodToPlay === undefined ?
                <div className={styles.notFound}>
                    <img src={animeQuestion} />
                    <div className={styles.notFoundText}>
                        <h1>No existe ese VOD</h1>
                        <Link to={`/vod?id=${--vodList.length}`}><h2>Mira el último directo</h2></Link>
                    </div>
                </div>
                :
                <>
                    <div className={styles.videoContainer}>
                        <iframe
                            className={styles.vod}
                            src={`https://drive.google.com/file/d/${vodToPlay.driveId}/preview`}
                            allow="autoplay"
                            allowFullScreen="true"
                            title="Rubius VOD"
                        />
                        <div className={styles.vodInfo}>
                            <h1>{vodToPlay.title}</h1>
                            <span>{vodToPlay.description}</span>
                        </div>
                    </div>

                    <div className={styles.switchVods}>
                        {vodList[+vodId - 1] ?
                            <div className={styles.selectVod}>
                                <h2>VOD anterior</h2>
                                {thumbnail(vodList[+vodId - 1].title, vodList[+vodId - 1].thumbnail, vodList[+vodId - 1].id)}
                            </div>
                            : ""}
                        {vodList[+vodId + 1] ?
                            <div className={styles.selectVod}>
                                <h2>Siguiente VOD</h2>
                                {thumbnail(vodList[+vodId + 1].title, vodList[+vodId + 1].thumbnail, vodList[+vodId + 1].id)}
                            </div>
                            : ""}
                    </div>
                </>}
        </div>
    </>)
};