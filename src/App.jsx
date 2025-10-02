// dependencies
import { useState, useEffect } from "react";
import Confetti from 'react-confetti'

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
  const [windowDimensions, setWindowDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800
  });

  // Update window dimensions on resize for confetti
  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
    <main>
      {isGameWon && (
        <Confetti 
          width={windowDimensions.width}
          height={windowDimensions.height}
          recycle={false}
          numberOfPieces={300}
          gravity={0.1}
        />
      )}

      <Header />
      
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
        <button className="new-game-btn" onClick={startGame}>
          New Game
        </button>
      )}
    </main>
  );
}
