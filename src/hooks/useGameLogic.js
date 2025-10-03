import { useState, useEffect, useMemo } from "react";
import { languages } from "../js/languages";

/**
 * Custom hook for managing the word guessing game logic
 * @returns {Object} Game state and methods
 */
export function useGameLogic() {
  const [word, setWord] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);

  // Derived state using useMemo for performance optimization
  const gameState = useMemo(() => {
    const isNewGame = guessedLetters.length === 0;
    const isGuessed = guessedLetters.length > 0;

    const lastGuessedLetter = isGuessed
      ? guessedLetters[guessedLetters.length - 1]
      : null;

    const isLastGuessedCorrect = word.includes(lastGuessedLetter);

    const isGameWon =
      word.length > 0 &&
      word.split("").every((letter) => guessedLetters.includes(letter));

    const isGameLost = guessedLetters.length > 7;
    const isGameOver = isGameWon || isGameLost;

    const wrongGuesses = guessedLetters.filter(
      (letter) => !word.includes(letter)
    );
    const lostLanguages = languages.slice(0, wrongGuesses.length);
    const lostLanguage =
      lostLanguages.length > 0
        ? lostLanguages[lostLanguages.length - 1].name
        : null;

    return {
      isNewGame,
      isGuessed,
      lastGuessedLetter,
      isLastGuessedCorrect,
      isGameWon,
      isGameLost,
      isGameOver,
      wrongGuesses,
      lostLanguages,
      lostLanguage,
    };
  }, [word, guessedLetters]);

  // Initialize game with random word
  useEffect(() => {
    startNewGame();
  }, []);

  // Game actions
  const handleKeyboardClick = (letter) => {
    if (gameState.isGameOver || guessedLetters.includes(letter)) {
      return; // Prevent action if game is over or letter already guessed
    }

    setGuessedLetters((prevState) => [...prevState, letter]);
  };

  const startNewGame = () => {
    const randomLanguage =
      languages[Math.floor(Math.random() * languages.length)];
    setWord(randomLanguage.name.toLowerCase());
    setGuessedLetters([]);
  };

  return {
    // State
    word,
    guessedLetters,

    // Derived state
    ...gameState,

    // Actions
    handleKeyboardClick,
    startNewGame,
  };
}
