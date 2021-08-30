import Card from "react-bootstrap/Card";
import "./ItemBody.css";
export default function ItemBody(props) {
  return (
    <div className="item-body-container">
      <Card.Title>{props.body.event}</Card.Title>
      <Card.Text>
        {props.body.team1} vs. {props.body.team2}
      </Card.Text>
      <Card.Text>{props.body.date}</Card.Text>
    </div>
  );
}
