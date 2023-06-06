import styles from "./maintainer.module.css";

export default function maintainer(name, description, image, accentColor, link) {
    return (
        <a
            className={styles.aboutMaintainer}
            href={link}
            style={{ border: `1px solid ${accentColor}`, boxShadow: `inset 0 0 50px 1px ${accentColor}48` }}
            target="_blank"
        >
            <img className={styles.pfp} src={image} />
            <div className={styles.textMaintainer}>
                <h1>{name}</h1>
                <p>{description}</p>
            </div>
        </a>
    )
}