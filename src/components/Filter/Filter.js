import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/Button";
import "./Filter.css";

export default function Filter(props) {
  //Team filtering
  const teamList1 = props.filterData.map((ele) => {
    return ele.team1;
  });
  const teamList2 = props.filterData.map((ele) => {
    return ele.team2;
  });
  const teamList = teamList1.concat(teamList2);
  const uniqueTeams = [...new Set(teamList)];

  //Event filtering
  const eventList = props.filterData.map((ele) => {
    return ele.event;
  });
  const uniqueEvents = [...new Set(eventList)];
  // Date filtering
  const dateList = props.filterData.map((ele) => {
    return ele.date;
  });
  const uniqueDates = [...new Set(dateList)];

  // Rendering dropdown items
  const finalTeamList = uniqueTeams.map((ele) => {
    return <Dropdown.Item>{ele}</Dropdown.Item>;
  });
  const finalEventList = uniqueEvents.map((ele) => {
    return <Dropdown.Item>{ele}</Dropdown.Item>;
  });
  const finalDateList = uniqueDates.map((ele) => {
    return <Dropdown.Item>{ele}</Dropdown.Item>;
  });

  return (
    <div className="flex-filter-container">
      <h3>Filter:</h3>
      <DropdownButton
        data-display="static"
        variant="info"
        className="filter-button"
        title={props.buttonState.Teams}
        onClick={props.handleSelect}
        id="team-dropdown"
      >
        {finalTeamList}
      </DropdownButton>
      <DropdownButton
        data-display="static"
        variant="info"
        className="filter-button"
        title={props.buttonState.Events}
        onClick={props.handleSelect}
        id="event-dropdown"
      >
        {finalEventList}
      </DropdownButton>
      <DropdownButton
        data-display="static"
        variant="info"
        className="filter-button"
        title={props.buttonState.Dates}
        onClick={props.handleSelect}
        id="date-dropdown"
      >
        {finalDateList}
      </DropdownButton>
      <Button variant="danger" onClick={props.clearBtn}>
        Clear Filter
      </Button>{" "}
    </div>
  );
}
