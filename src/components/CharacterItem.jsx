import { useGot } from "../context/GotContext";
import styles from "./CharacterItem.module.css";

const CharacterItem = ({ character }) => {
  const { fullName, imageUrl, image } = character;
  const { setSelected } = useGot();
  return (
    <li className={styles.item} onClick={() => setSelected(character)}>
      <img className={styles.itemImage} src={imageUrl} alt={image} />
      <div className={styles.info}>
        <p className={styles.name}>{fullName}</p>
      </div>
    </li>
  );
};

export default CharacterItem;
