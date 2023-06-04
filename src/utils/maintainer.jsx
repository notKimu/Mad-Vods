import styles from "./maintainer.module.css";

export default function maintainer(name, description, image, accentColor) {
    return (<>
        <div className={styles.aboutMaintainer} style={{border: `1px solid ${accentColor}`, boxShadow: `inset 0 0 50px 1px ${accentColor}48`}}>
            <img className={styles.pfp} src={image} />
            <div className={styles.textMaintainer}>
                <h1>{name}</h1>
                <p>{description}</p>
            </div>
        </div>
    </>)
}