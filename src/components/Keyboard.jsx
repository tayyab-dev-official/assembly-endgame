
import clsx from "clsx";

function Keyboard(props) {
  const keyboardCharacters = getKeyboardLetters();

  function getKeyboardLetters() {
    const keyboardLetters = [];
    for (let i = 0; i < 26; i++) {
      keyboardLetters.push(String.fromCharCode(97 + i));
    }
    return keyboardLetters;
  }

  return (
    <section className="keyboard">
      {keyboardCharacters.map((letter) => {

        const isLastGuessedLetter = props.lastGuessedLetter === letter
        const isGuessedLetter = props.guessedLetters.includes(letter);
        const isWordLetter = props.word.split('').includes(letter)

        const name = clsx({
          yellow: !isLastGuessedLetter && !isGuessedLetter,
          green: isGuessedLetter && isWordLetter,
          red: isGuessedLetter && !isWordLetter,
        });

        const styles = {
          cursor: isGuessedLetter || props.isGameOver ? "not-allowed" : "pointer"
        }

        return (
          <button
            key={letter}
            onClick={() => props.onClick(letter)}
            disabled={isGuessedLetter || props.isGameOver? true : false}
            style={styles}
            className={name}
          >
            {letter.toUpperCase()}
          </button>
        );
      })}
    </section>
  );
}

export default Keyboard;
