// import clsx from "clsx";

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

  const notice =
    "text-center w-full max-w-[350px] mt-[1.25em] p-[1.25em] border-2 border-dashed border-[#323232] border-lg";

  const farewell = "bg-[#7a5ea7]";

  const won = "bg-green-600";

  const lost = "bg-red-600";

  // const className = clsx({
  //   notice: true,
  //   won: props.isGameWon,
  //   lost: props.isGameLost,
  //   farewell: !props.isNewGame,
  // });

  const wonNotice = () => {
    return (
      <div className={notice + " " + won}>
        <h2 className="text-4xl font-bold">You Win</h2>
        <p className="text-medium">Well done! 🍕</p>
      </div>
    );
  };

  const lostNotice = () => {
    return (
      <div className={notice + " " + lost}>
        <h2 className="text-4xl font-bold">Game over!</h2>
        <p className="text-medium">
          You lose! Better start learning Assembly 😭
        </p>
      </div>
    );
  };

  const blankNotice = () => {
    return (
      <div className={notice}>
        <h2></h2>
      </div>
    );
  };

  const farewellNotice = (language) => {
    return (
      <div className={notice + " " + farewell}>
        <h2 className="text-3xl font-bold">{farewellMessage(language)}</h2>
      </div>
    );
  };

  if (props.isNewGame) {
    return blankNotice();
  }

  if (props.isGameWon) {
    return wonNotice();
  }

  if (props.isGameLost) {
    return lostNotice();
  }

  if (!props.isLastGuessedCorrect && props.lostLanguage) {
    return farewellNotice(props.lostLanguage);
  }
}
