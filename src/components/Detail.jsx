import { useGot } from "../context/GotContext";
import styles from "./Detail.module.css";

const Detail = () => {
  const { selected: character } = useGot();
  const { fullName, imageUrl, image, title, family } = character;

  const isValid = Object.keys(character).length > 0;

  const animation = isValid ? "" : styles.hide;
  return (
    <aside className={`${styles.detail} ${isValid ? styles.open : ""}`}>
      <figure className={`${styles.image} ${animation}`}>
        <img src={imageUrl} alt={image} />
        <figcaption>{fullName}</figcaption>
      </figure>
      <div className={`${styles.info} ${animation}`}>
        <p>{title}</p>
        <p>{family}</p>
      </div>
    </aside>
  );
};

export default Detail;
