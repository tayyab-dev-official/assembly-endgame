// dependencies
import Confetti from "react-confetti";

// hooks
import { useGameLogic } from "./hooks/useGameLogic";

// components
import Header from "./components/Header";
import Languages from "./components/Languages";
import Word from "./components/Word";
import Keyboard from "./components/Keyboard";
import Farewell from "./components/Farewell";

export default function App() {
  // Use custom hook for all game logic
  const {
    word,
    guessedLetters,
    isNewGame,
    isGuessed,
    lastGuessedLetter,
    isLastGuessedCorrect,
    isGameWon,
    isGameLost,
    isGameOver,
    lostLanguages,
    lostLanguage,
    handleKeyboardClick,
    startNewGame,
  } = useGameLogic();

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
          onClick={startNewGame}
        >
          New Game
        </button>
      )}
    </main>
  );
}
