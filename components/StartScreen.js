import styles from "../styles/StartScreen.module.css";

const StartScreen = ({ startGame }) => {
  return (
    <div className={styles.start}>
      <h1>Secret Word</h1>
      <p>Clique no botão abaixo para começar a jogar</p>
      <button onClick={startGame}>COMEÇAR O JOGO</button>
    </div>
  );
};

export default StartScreen;
