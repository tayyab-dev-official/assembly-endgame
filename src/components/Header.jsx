import React from "react";

const Header = React.memo(() => (
  <header className="text-center max-w-[350px]">
    <h1 className="font-medium text-lg text-cream mb-2">Assembly: Endgame</h1>
    <p className="font-normal text-gray-400">
      Guess the word in under 8 attempts to keep the programming world safe from
      Assembly!
    </p>
  </header>
));

export default Header