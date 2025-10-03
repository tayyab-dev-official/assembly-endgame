import clsx from "clsx";

function Word(props) {
  return (
    <section className="max-w-[334px] flex">
      {props.word.split("").map((letter, index) => {
        const className = clsx(
          props.isGameOver && !props.guessedLetters.includes(letter) && "text-red-600"
        );

        return (
          <span
            key={index}
            className={
              className +
              " " +
              "font-bold text-2xl w-[40px] h-[40px] bg-[#323232] ml-1 p-0.1 border-b-2 border-[#f9f4da] flex items-end justify-center"
            }
          >
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
