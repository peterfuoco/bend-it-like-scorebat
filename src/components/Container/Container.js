import Item from "../Item/Item";
import Filter from "../Filter/Filter";
import React, { useEffect, useState } from "react";
import "./Container.css";
const Container = (props) => {
  // console.log(props);

  // Add results to item component
  const searchResponse = props.results.map((ele, index) => {
    return <Item {...ele} key={index} />;
  });

  return (
    <div className="main-flex-container">
      {/* Boolean for if search done or not, if not show soccer ball  */}
      {!props.filterToggle[0] ? (
        <div className="soccer-ball"> </div>
      ) : (
        props.filterToggle[0]
      )}
      {/* Boolean for if search done or not, if not show Filter dropdown  */}

      {props.filterToggle[0] ? (
        <Filter
          filterData={props.results}
          filterList={props.filterList}
          handleSelect={props.handleSelect}
          filteredResponse={props.filteredResponse}
          initialSubmit={props.initialSubmit}
          buttonState={props.buttonState}
          clearBtn={props.clearBtn}
        />
      ) : (
        props.filterToggle
      )}
      <div className="item-container">
        {searchResponse ? searchResponse : <div>sorry try again</div>}
      </div>
    </div>
  );
};
export default Container;
