import Cards from "../components/Cards";

export default function Home({ characters, onClose }) {
  return <Cards characters={characters} onClose={onClose} />;
}
