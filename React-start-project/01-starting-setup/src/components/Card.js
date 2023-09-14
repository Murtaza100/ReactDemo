import "./Card.css";

function Card(props) {
  const classes = "card " + props.className;

  //to make it work as a wrapper at place of div
  return <div className={classes}>{props.children}</div>;
}
export default Card;
