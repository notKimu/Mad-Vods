import { useEffect, useState } from "react";
import Header from "./components/Header";
import thumbnail from "./utils/thumbnail";
import styles from "./styles/app.module.css";
// Vod list
import vods from "./files/vods.json";

let thumbnailWidth = "calc(33.33% - 0.66rem)";
function MainPage() {
    // Get the VOD list and last VOD
    const vodList = Object.values(vods);
    const lastVod = vodList.slice(-1);

    // Pages for all the VODS
    const [currentPage, setCurrentPage] = useState(1);
    const [maxPageSize, setMaxPageSize] = useState(getInitialmaxPageSize());
    const startIndex = (currentPage - 1) * maxPageSize;
    const endIndex = startIndex + maxPageSize;
    const paginatedVodList = vodList.slice().reverse().slice(startIndex, endIndex);

    function getInitialmaxPageSize() {
        if (window.innerWidth < 700) {
            thumbnailWidth = "calc(50% - 0.66rem)";
            return 8
        } else {
            thumbnailWidth = "calc(33.33% - 0.66rem)";
            return 9;
        }
    }

    useEffect(() => {
        function handleResize() {
            setMaxPageSize(getInitialmaxPageSize());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

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

    useEffect(() => {
        console.log(window.innerWidth);
    }, [window.innerWidth])


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
                            return thumbnail(vod.title, genThumbnail, generateImageId(index), thumbnailWidth);
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