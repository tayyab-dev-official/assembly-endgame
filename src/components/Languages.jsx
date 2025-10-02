import { languages } from "../js/languages";

function Languages(props) {
  return (
    <section className="languages">
      {languages.map((language) => {
        const { name } = language;

        const normal = {
          backgroundColor: language.backgroundColor,
          color: language.color,
        };

        const special = {
          ...normal,
          textDecoration: "line-through gray 3px",
        };

        const styles = () => {
          if (props.lostLanguages) {
            if (props.lostLanguages.includes(language)) {
              return special;
            }
          }
          return normal;
        };

        const isLost = props.lostLanguages?.includes(language);
        const className = isLost ? "lost" : "";

        return (
          <span key={name} style={styles()} className={className}>
            {name}
          </span>
        );
      })}
    </section>
  );
}

export default Languages;
