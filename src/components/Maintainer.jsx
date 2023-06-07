import styles from "./maintainer.module.css";

export default function Maintainer(name, description, image, accentColor, link) {
    return (
        <a
            className={styles.aboutMaintainer}
            href={link}
            style={{ border: `1px solid ${accentColor}`, boxShadow: `inset 0 0 50px 1px ${accentColor}48` }}
            rel="noreferrer"
            target="_blank"
        >
            <img alt={`Foto de perfil de ${name}`} className={styles.pfp} src={image} />
            <div className={styles.textMaintainer}>
                <h1>{name}</h1>
                <p>{description}</p>
            </div>
        </a>
    )
}