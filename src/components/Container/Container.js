import Item from "../Item/Item";
import Filter from "../Filter/Filter";
import "./Container.css";

const Container = (props) => {
  console.log(props);

  // Add results to item component
  const searchResponse = props.results.map((ele, index) => {
    return <Item {...ele} key={index} />;
  });

  return (
    <div className="main-flex-container">
      {/* Boolean for if search done or not, if not show soccer ball  */}
      {props.results.length === 0 ? (
        <div className="soccer-ball"> </div>
      ) : (
        <div className='filter-item-container'>
          <Filter
            filterData={props.results}
            filterList={props.filterList}
            handleSelect={props.handleSelect}
            buttonState={props.buttonState}
            clearBtn={props.clearBtn}
          />
          <div className="item-container">{searchResponse}</div>
        </div>
      )}
    </div>
  );
};
export default Container;
