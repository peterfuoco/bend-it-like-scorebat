import Item from "../Item/Item";
import Filter from "../Filter/Filter";
import React, { useEffect, useState } from 'react';
import './Container.css';
const Container = (props)=> {
  console.log(props);

  
  // ADD PROPS TO HERE
  const searchResponse = props.results.map((ele, index) => {
    return <Item {...ele} key={index} />;
  });
  
  // useEffect(() => {
  //   // if (itemsToShow){
  //     console.log(itemsToShow)
  //     props.setResults(itemsToShow)
  //   // }
  // }, []);


  
  return (
    <div>
      <h1>Container</h1>
      {props.filterToggle[0]
      ? <Filter filterData={searchResponse} filterList={props.filterList} handleSelect={props.handleSelect}/>
      : props.filterToggle
    }
    <div className='item-container'>


        {searchResponse }
        </div>
    </div>
  );
}
export default Container;