import Card from "react-bootstrap/Card";
import './ItemBody.css';
export default function ItemBody(props) {
    // console.log(props);
    return (
      <div className='item-body-container'>

      <Card.Title>{props.body.event}</Card.Title>
      <Card.Text>
      {props.body.team1} vs. {props.body.team2}
      </Card.Text>
      <Card.Text>
     {props.body.date}
      </Card.Text>
      </div>
      //   <div className="card-body">
      //     <h5 className="card-title">{props.body.event}</h5>
      //     <p className="card-text">
      //     {props.body.team1} vs {props.body.team2} - {props.body.date}
      //     </p>
      // </div>
    );
  }