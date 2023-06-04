import { useState } from "react";
import Header from "./components/Header";
import thumbnail from "./utils/thumbnail";
import styles from "./styles/app.module.css";
// Vod list
import vods from "./files/vods.json";

function MainPage() {
    // Get the VOD list and last VOD
    const vodList = Object.values(vods);
    const lastVod = vodList.slice(-1);
    // Pages for all the VODS
    const PAGE_SIZE = 9;
    const [currentPage, setCurrentPage] = useState(1);
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    const paginatedVodList = vodList.slice().reverse().slice(startIndex, endIndex);
  
    const loadMore = () => {
      setCurrentPage(currentPage + 1);
    };
    const prevPage = () => {
        setCurrentPage(currentPage - 1);
    };
    const generateImageId = (index) => {
        const imageIndex = startIndex + index;
        return vodList.length - imageIndex;
      };


    return (
        <>
            <Header />

            <div className="container">
                <div className={styles.lastVodContainer}>
                    <h1>Último VOD</h1>
                    <div className={styles.lastVodPlayer}>
                        <iframe
                            className={styles.lastVod}
                            src={lastVod[0].isYoutube === 0 ?
                                `https://drive.google.com/file/d/${lastVod[0].videoId}/preview`
                                : "https://www.youtube.com/embed/" + lastVod[0].videoId}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
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
                    <h1>Todos los VODS - {--vodList.length}</h1>
                    <div className={styles.allVods}>
                        {paginatedVodList.map((vod, index) => {
                            let genThumbnail = "";
                            vod.isYoutube === 1
                                ? (genThumbnail = `https://img.youtube.com/vi/${vod.videoId}/mqdefault.jpg`)
                                : (genThumbnail = vod.thumbnail);
                            return thumbnail(vod.title, genThumbnail, generateImageId(index));
                        })}
                    </div>

                    <div className={styles.buttons}>
                        {currentPage !== 1 && (
                            <button onClick={prevPage}>Anterior</button>
                        )}
                        <div className={styles.buttonsFiller} />
                        {vodList.length > endIndex && (
                            <button onClick={loadMore}>Siguiente</button>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
};

export default MainPage;