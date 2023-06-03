import { Link, useSearchParams } from "react-router-dom";
import Header from "./components/Header";
import styles from "./styles/vod.module.css";
import thumbnail from "./utils/thumbnail";
// Vod list
import vods from "./files/vods.json";

export default function Vod() {
    // Get what VOD to play
    const [searchParams] = useSearchParams();
    let vodId = searchParams.get('id');
    const vodList = Object.values(vods);
    let vodToPlay = vodList[vodId];
    console.log(vodId)
    // Use the last VOD if no id is provided
    if (vodId === null) {
        vodToPlay = vodList.slice(-1)[0];
        vodId = vodToPlay.id;
    }

    return (<>
        <Header />

        <div className="container">
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
        </div>
    </>)
};