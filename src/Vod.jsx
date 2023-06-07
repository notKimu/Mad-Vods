import { Link, useSearchParams } from "react-router-dom";
import Header from "./components/Header";
import styles from "./styles/vod.module.css";
import thumbnail from "./utils/thumbnail";
import animeQuestion from "./files/img/animeQuestion.png";
import exclamations from "./files/img/exclamations.png";
import crown from "./files/img/crown.png";
// Vod list
import vods from "./files/vods.json";

export default function Vod() {
    const [searchParams] = useSearchParams();
    let vodId, vodList, vodToPlay;
    // Get what VOD to play
    vodId = searchParams.get('id');
    vodList = Object.values(vods);
    vodToPlay = vodList[vodId];
    if (!parseInt(vodId) && vodId != 0) {
        vodToPlay = vodList.slice(-1)[0];
        vodId = vodList.length - 1;
    }

    document.title = "MadVods | VOD " + vodId;

    return (<>
        <Header />

        <div className="container">
            {vodToPlay === undefined ?
                <div className="notFound">
                    <img src={animeQuestion} />
                    <div className="notFoundText">
                        <h1>No existe ese VOD</h1>
                        <Link to={`/vod?id=${--vodList.length}`}><h2>Mira el último directo</h2></Link>
                    </div>
                </div>
                :
                <>
                    <div className={styles.videoContainer}>
                        <img className={`${styles.exclamations} animate`} src={exclamations} />
                        <img className={`${styles.crown} animate`} src={crown} />
                        {vodToPlay.isYoutube === 0 ? <a className="driveSender" href={`https://drive.google.com/file/d/${vodToPlay.videoId}/preview`} target="_blank" /> : ""}
                        <iframe
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen="true"
                            className="vod"
                            src={vodToPlay.isYoutube === 0 ?
                                `https://drive.google.com/file/d/${vodToPlay.videoId}/preview`
                                : "https://www.youtube.com/embed/" + vodToPlay.videoId}
                            title={vodToPlay.title}
                        />

                        <div className={`${styles.vodToPlayInfo} vodInfo`}>
                            <h1>{vodToPlay.title}</h1>
                            <p>{vodToPlay.description}</p>
                        </div>
                    </div>

                    <div className={styles.switchVods}>
                        {vodList[+vodId + 1] ?
                            <div className={styles.selectVod}>
                                <h2>Siguiente VOD</h2>
                                {
                                    vodList[+vodId + 1].isYoutube === 1 ?
                                        thumbnail(vodList[+vodId + 1].title, `https://img.youtube.com/vi/${vodList[+vodId + 1].videoId}/mqdefault.jpg`, +vodId + 1, vodList[+vodId + 1].isYoutube, "100%")
                                        : thumbnail(vodList[+vodId + 1].title, vodList[+vodId + 1].thumbnail, +vodId + 1, vodList[+vodId + 1].isYoutube, "100%")
                                }
                            </div>
                            : ""}

                         <div className={styles.filler} />

                        {vodList[+vodId - 1] ?
                            <div className={styles.selectVod}>
                                <h2>VOD anterior</h2>
                                {
                                    vodList[+vodId - 1].isYoutube === 1 ?
                                        thumbnail(vodList[+vodId - 1].title, `https://img.youtube.com/vi/${vodList[+vodId - 1].videoId}/mqdefault.jpg`, +vodId - 1, vodList[+vodId - 1].isYoutube, "100%")
                                        : thumbnail(vodList[+vodId - 1].title, vodList[+vodId - 1].thumbnail, +vodId - 1, vodList[+vodId - 1].isYoutube, "100%")
                                }
                            </div>
                            : ""}
                    </div>
                </>}
        </div>
    </>)
};