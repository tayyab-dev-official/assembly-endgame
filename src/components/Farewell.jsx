import clsx from "clsx";

export default function Farewell(props) {

  const farewellMessage = (language) => {
    
    const options = [
      `Farewell, ${language}`,
      `Adios, ${language}`,
      `R.I.P., ${language}`,
      `We'll miss you, ${language}`,
      `Oh no, not ${language}!`,
      `${language} bites the dust`,
      `Gone but not forgotten, ${language}`,
      `The end of ${language} as we know it`,
      `Off into the sunset, ${language}`,
      `${language}, it's been real`,
      `${language}, your watch has ended`,
      `${language} has left the building`,
    ];

    const optionsIndex = Math.floor(Math.random() * options.length);
    return options[optionsIndex];
  };

  const className = clsx({
    notice: true,
    won: props.isGameWon,
    lost: props.isGameLost,
    farewell: !props.isNewGame,
  });

  const wonNotice = () => {
    return (
      <div className={className}>
        <h2>You Win</h2>
        <p>Well done! 🍕</p>
      </div>
    );
  };

  const lostNotice = () => {
    return (
      <div className={className}>
        <h2>Game over!</h2>
        <p>You lose! Better start learning Assembly 😭</p>
      </div>
    );
  };

  const blankNotice = () => {
    return (
      <div className={className}>
        <h2></h2>
      </div>
    );
  };

  const farewellNotice = (language) => {
    return (
      <div className={className}>
        <h2>{farewellMessage(language)}</h2>
      </div>
    );
  };

  if (props.isNewGame){
    return blankNotice()
  }

  if (props.isGameLost) {
    return lostNotice()
  }

  if (props.isGameWon){
    return wonNotice()
  }

  if (!props.isLastGuessedCorrect && props.lostLanguage) {
    return farewellNotice(props.lostLanguage);
  }
}
