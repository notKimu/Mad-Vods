import { Link } from "react-router-dom";
import styles from "./thumbnail.module.css";
import playButton from "../files/svg/play.svg";
import copyright from "../files/svg/copyright.svg";

export default function thumbnail(title, thumbnail, id, isYoutube, width) {
    return (
        <Link to={`/vod?id=${id}`} className={styles.singleVod} style={{width: width}}>
            {isYoutube !== 1 && <img src={copyright} className={styles.locked} />}
            <img alt={title} className={styles.vod} src={thumbnail} />
            <div className={styles.vodGradient}></div>
            <div className={styles.vodTitleContainer}>
                <p>{title}</p>
            </div>
            <div className={styles.playVod}>
                <img alt="Play button" className={styles.playButton} src={playButton} />
            </div>
        </Link>
    )
}