export default function ItemBody(props) {
    // console.log(props);
    return (
        <div className="card-body">
        <h5 className="card-title">{props.body.event}</h5>
        <p className="card-text">
        {props.body.team1} vs {props.body.team2} - {props.body.date}
        </p>
        {/* <Button props={props.cardBody.props.url}/> */}
      </div>
    );
  }