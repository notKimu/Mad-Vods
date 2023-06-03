import { Link } from "react-router-dom";
import playButton from "../files/svg/play.svg";
import styles from "./thumbnail.module.css";

export default function thumbnail(title, thumbnail, id) {
    return (
        <Link to={`/vod?id=${id}`} className={styles.singleVod}>
            <img alt="VOD from El RubiusOMG" className={styles.vod} src={thumbnail} />
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