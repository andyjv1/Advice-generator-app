import patterndesk from "../images/pattern-divider-desktop.svg";
import patternmob from "../images/pattern-divider-mobile.svg";

function Text(props) {
  return (
    <>
      <h1>
        {props.error==="" ? `ADVICE #${props.Id}`: ""}
      </h1>

      <p
        className={props.error === "" ? '' : 'error'}
      >
        {props.error==="" ? `"${props.adviceText}"` : props.error}

      </p>
      <picture>
        <source srcSet={patterndesk} 
          media="(max-width: 1440px)"/>
        <source srcSet={patternmob}
          media="(max-width: 375px)" />
        <img src={patterndesk} alt="" className="pattern" />
      </picture>

    </>
  );
}

export default Text;
