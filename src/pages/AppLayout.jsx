import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import CharacterItem from "../components/CharacterItem";
import CharacterList from "../components/CharacterList";
import styles from "./AppLayout.module.css";
import Detail from "../components/Detail";
import { useGot } from "../context/GotContext";
import Loading from "../components/Loading";

const AppLayout = () => {
  const { characters, isLoading, query } = useGot();
  let filtered = characters;
  if (query) {
    filtered = characters.filter((charcater) =>
      charcater.fullName.toLowerCase().includes(query)
    );
  }

  return (
    <div className={styles.app}>
      {isLoading && <Loading />}
      <Header />
      <Main>
        <CharacterList>
          {filtered.map((character) => (
            <CharacterItem character={character} key={character.id} />
          ))}
        </CharacterList>
        <Detail />
      </Main>
      <Footer></Footer>
    </div>
  );
};

export default AppLayout;
