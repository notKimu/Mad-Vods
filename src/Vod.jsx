import { useSearchParams } from "react-router-dom";
import Header from "./components/Header";
import styles from "./styles/vod.module.css";
// Vod list
import vods from "./files/vods.json";

export default function Vod() {
    const [searchParams] = useSearchParams();
    const vodId = searchParams.get('id');
    const vodList = Object.values(vods);
    let vodToPlay = vodList[vodId - 1];
    if (!vodId) {
        vodToPlay = vodList.slice(-1)[0];
        console.log(vodToPlay)
    }

    return (<>
        <Header />

        <div className="container">
            <div className={styles.videoContainer}>
                <iframe
                    className={styles.vod}
                    src={"https://drive.google.com/uc?id=" + vodToPlay.driveId}
                    allow="autoplay"
                    allowFullScreen="true"
                    title="Rubius VOD"
                />
                <div className={styles.vodInfo}>
                    <h1>{vodToPlay.title}</h1>
                    <span>{vodToPlay.description}</span>
                </div>
            </div>
        </div>
    </>)
};