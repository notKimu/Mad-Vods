import Header from "./components/Header";
import styles from "./styles/about.module.css";
import Maintainer from "./components/Maintainer";
// Images owo
import kimu from "./files/img/kimu.png";
import naneko from "./files/img/naneko.png";
import questionmark from "./files/img/questionmark.png";

export default function About() {
    document.title = "MadVods | About";

    return (<>
        <Header />

        <div className="container">
            <div className={styles.aboutContainer}>
                <img alt="Signo de pregunta, to guapo." className={`${styles.question} animate`} src={questionmark} />
                <h2>Sobre Mad Vods</h2>
                <span>
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
                    el código en <a className={styles.github} target="_blank" rel="noreferrer" href="https://github.com/notKimu/Mad-Vods">Github</a>.
                </span>

                {Maintainer("Kimu", "Programadora de la página web y maintainer del almacenamiento.", kimu, "#bf3e81", "https://twitter.com/notK1mu")}
                {Maintainer("Naneko", "Responsable de la subida de los vídeos y el canal de YouTube.", naneko, "#45c0d1", "https://twitter.com/NanekoNya")}
            </div>
        </div>
    </>)
}