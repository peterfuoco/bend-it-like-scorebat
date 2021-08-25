import ItemBody from '../itemBody/ItemBody';
import ItemVideo from '../ItemVideo/ItemVideo';

export default function Item(props) {
  // console.log(props);
  return (
    <div className="card" style={{ width: "18rem" }}>
              <ItemBody
       body={props} 
      />
      <ItemVideo 
      videos={props.videos}

       />

    </div>
  );
}
