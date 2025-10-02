import clsx from "clsx";

function Word(props) {
  console.log(props);
  return (
    <section className="word">
      {props.word.split("").map((letter) => {
        const className = clsx(
          props.isGameOver && !props.guessedLetters.includes(letter) && "red"
        );

        return (
          <span key={letter} className={className}>
            {props.guessedLetters.includes(letter) || props.isGameOver
              ? letter.toUpperCase()
              : " "}
          </span>
        );
      })}
    </section>
  );
}

export default Word;
