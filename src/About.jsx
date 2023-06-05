import Header from "./components/Header";
import styles from "./styles/about.module.css";
import maintainer from "./utils/maintainer";
// Images owo
import kimu from "./files/img/kimu.png";
import naneko from "./files/img/naneko.png";

export default function About() {
    document.title = "MadVods | About";

    return (<>
        <Header />

        <div className="container">
            <div className={styles.aboutContainer}>
                <h1>Sobre Mad Vods</h1>
                <p>
                    Mad Vods fue creado ya que las discográficas no tienen nada
                    más divertido que hacer por las tardes que tumbar los directos
                    resubidos de Rubius (y cualquier otra persona realmente) porque
                    hay 0.3 segundos de alguna canción.
                    <br /><br />
                    Mad Vods te permite ver los directos tumbados por copyright sin
                    necesitar saber hackear la NASA.
                    <br /><br />
                    Esta página es solamente front end, todos los vídeos están guardados
                    en Google Drive, puedes verlos cómodamente y tenerlos listados en orden
                    desde aquí, obviamente sin tener que pagar nada ni ver anuncios, puedes ver
                    el código en <a href="https://github.com/notKimu/Mad-Vods">Github</a>.
                </p>

                {maintainer("Kimu", "Programadora de la página web y maintainer del almacenamiento.", kimu, "#bf3e81")}
                {maintainer("Naneko", "Responsable de la subida de los vídeos y el canal de YouTube.", naneko, "#45c0d1")}


            </div>
        </div>
    </>)
}