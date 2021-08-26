import ItemBody from "../itemBody/ItemBody";
import ItemVideo from "../ItemVideo/ItemVideo";
import Card from "react-bootstrap/Card";
import './Item.css';
export default function Item(props) {

  return (
    <Card className='item-size' >
      <Card.Body>
              <ItemBody
            body={props}
            />
             <ItemVideo
      videos={props.videos}

       />
      </Card.Body>
    </Card>
  );
}
