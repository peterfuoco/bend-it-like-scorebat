import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import './Filter.css';
export default function Filter (props) {

    console.log(props)
      //Team filtering
        const teamList1 = props.filterData.map((ele) => {
        return (ele.props.team1)
      });
      const teamList2 = props.filterData.map((ele) => {
        return (ele.props.team2)
      });
      const teamList = teamList1.concat(teamList2)
      const uniqueTeams = [...new Set(teamList)];
      console.log(uniqueTeams)
      //Event filtering
      const eventList = props.filterData.map((ele) => {
        return (ele.props.event)
      });
      let uniqueEvents = [...new Set(eventList)];
      // Date filtering
      const dateList = props.filterData.map((ele) => {
        return (ele.props.date)
      });
      let uniqueDates = [...new Set(dateList)];
      
      // Rendering dropdown items
      const finalTeamList = uniqueTeams.map((ele) => {
        return (
            <Dropdown.Item >{ele}</Dropdown.Item>
        )
      });
      const finalEventList = uniqueEvents.map((ele) => {
        return (
            <Dropdown.Item>{ele}</Dropdown.Item>
        )
      });
      const finalDateList = uniqueDates.map((ele) => {
        return (
            <Dropdown.Item>{ele}</Dropdown.Item>
        )
      });

    return (
        <div className="flex-filter-container">
            <DropdownButton id="dropdown-basic-button" title="Teams" onClick={props.handleSelect} id='team-dropdown'>
                 {finalTeamList}
            </DropdownButton>
            <DropdownButton id="dropdown-basic-button" title="Events" onClick={props.handleSelect} id='event-dropdown'>
                 {finalEventList}
            </DropdownButton>
            <DropdownButton id="dropdown-basic-button" title="Dates" onClick={props.handleSelect} id='date-dropdown'>
                 {finalDateList}
            </DropdownButton>
        </div>
)
}