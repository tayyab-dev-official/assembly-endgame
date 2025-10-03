// dependencies
import { useState, useEffect } from "react";
import Confetti from 'react-confetti';

// components
import Header from "./components/Header";
import Languages from "./components/Languages";
import Word from "./components/Word";
import Keyboard from "./components/Keyboard";
import Farewell from "./components/Farewell";
import { languages } from "./js/languages";

export default function App() {
  const [word, setWord] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);

  const isNewGame = guessedLetters.length === 0;
  const isGuessed = guessedLetters.length > 0;

  const lastGuessedLetter = isGuessed
    ? guessedLetters[guessedLetters.length - 1]
    : null;
  
  const isLastGuessedCorrect = word.includes(lastGuessedLetter);

  const isGameWon = word
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const isGameLost = guessedLetters.length > 7;

  const isGameOver = isGameWon || isGameLost;

  const wrongGuesses = guessedLetters.filter(letter => !word.includes(letter))

  const lostLanguages = languages.slice(0, wrongGuesses.length)
  const lostLanguage = lostLanguages.length && lostLanguages[lostLanguages.length - 1].name

  useEffect(
    function () {
      setWord("react");
    },
    [word]
  );

  function handleKeyboardClick(letter) {
    setGuessedLetters((prevState) =>
      prevState.includes(letter) ? prevState : [...prevState, letter]
    );
  }

  function startGame() {
    setGuessedLetters([]);
    setWord("");
  }

  return (
    <main className="flex flex-col items-center justify-center gap-8 w-full min-h-screen font-hankenGrotesk text-[#f9f4da] bg-[#282726] m-auto">
      <Header />
      {isGameWon && <Confetti />}

      <Farewell
        isNewGame={isNewGame}
        isGameLost={isGameLost}
        isGameWon={isGameWon}
        lostLanguage={lostLanguage}
        isLastGuessedCorrect={isLastGuessedCorrect}
      />

      <Languages lostLanguages={lostLanguages} />

      <Word
        word={word}
        guessedLetters={guessedLetters}
        isGameOver={isGameOver}
      />

      <Keyboard
        onClick={handleKeyboardClick}
        isGuessed={isGuessed}
        isLastGuessedCorrect={isLastGuessedCorrect}
        isGameOver={isGameOver}
        lastGuessedLetter={lastGuessedLetter}
        word={word}
        guessedLetters={guessedLetters}
      />

      {isGameOver && (
        <button
          className="font-hankenGrotesk font-[700] bg-[#11b5e5] border-2 border-[#d7d7d7] rounded-md px-4 py-2 text-xl text-black cursor-pointer"
          onClick={startGame}
        >
          New Game
        </button>
      )}
    </main>
  );
}
