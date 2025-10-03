import { languages } from "../js/languages";

function Languages({lostLanguages}) {
  return (
    <section className="w-[320px] flex flex-wrap items-center justify-center gap-2 p-1">
      {languages.map((language) => {
        const { name } = language;

        const styles = {
         backgroundColor: language.backgroundColor,
          color: language.color,
        };

        const isLost = lostLanguages?.includes(language);
        const className = isLost
          ? "relative before:content-['💀'] before:absolute before:top-0 before:left-0 before:flex before:items-center before:justify-center before:w-full before:h-full before:text-base before:bg-black/70 before:rounded-sm"
          : " ";

        return (
          <span
            key={name}
            style={styles}
            className={
              className +
              " " +
              "font-bold text-lg text-center px-2 py-1 rounded-sm text-[#1e1e1e]"
            }
          >
            {name}
          </span>
        );
      })}
    </section>
  );
}

export default Languages;
