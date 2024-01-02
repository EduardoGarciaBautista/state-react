import styles from './CharacterList.module.css'

const CharacterList = ({ children }) => {
  return <ul className={styles.list}>{children}</ul>;
};

export default CharacterList;
