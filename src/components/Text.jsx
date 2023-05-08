import patterndesk from "../images/pattern-divider-desktop.svg";
import patternmob from "../images/pattern-divider-mobile.svg";

function Text(props) {

  return (
    <>
      <span>ADVICE #{props.Id}</span>

      <h1>
        "{props.adviceText}"
      </h1>
      <img className="patterndesk" src={patterndesk} alt={"patterndesk"} />
      <img className="patternmob" src={patternmob} alt={"patternmob"} />
    </>
  );
}

export default Text;
