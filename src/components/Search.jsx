import { useGot } from "../context/GotContext";
import styles from "./Search.module.css";

const Search = () => {
  const { setQuery } = useGot();
  return (
    <input
      onChange={(e) => setQuery(e.target.value)}
      type="search"
      className={styles.search}
      placeholder="Search for your favorite charcater"
    />
  );
};

export default Search;
