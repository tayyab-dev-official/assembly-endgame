import { useCallback } from "react";

function Keyboard(props) {
  const getKeyboardLetters = useCallback(() => {
    return Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));
  }, []);
  return (
    <section className="flex flex-wrap items-center justify-center gap-2 max-w-[480px] p-2 mb-2">
      {getKeyboardLetters().map((letter) => {
        const isLastGuessedLetter = props.lastGuessedLetter === letter;
        const isGuessedLetter = props.guessedLetters.includes(letter);
        const isWordLetter = props.word.split("").includes(letter);

        const yellow = "bg-yellow-600";
        const green = "bg-green-600";
        const red = "bg-red-600";

        let name = "";

        if (!isLastGuessedLetter && !isGuessedLetter) {
          name = yellow;
        }

        if (isGuessedLetter && isWordLetter) {
          name = green;
        }

        if (isGuessedLetter && !isWordLetter) {
          name = red;
        }

        const styles = {
          cursor:
            isGuessedLetter || props.isGameOver ? "not-allowed" : "pointer",
        };

        return (
          <button
            key={letter}
            onClick={() => props.onClick(letter)}
            disabled={isGuessedLetter || props.isGameOver ? true : false}
            style={styles}
            className={
              name +
              " " +
              "w-[40px] h-[40px] font-hankenGrotesk text-xl font-extrabold text-[#1e1e1e] rounded-lg border-2 border-[#d7d7d7]"
            }
          >
            {letter.toUpperCase()}
          </button>
        );
      })}
    </section>
  );
}

export default Keyboard;
