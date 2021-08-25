import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Search from "./components/Search/Search";
import Container from "./components/Container/Container";
import Header from "./components/Header/Header.js";
// import data from './data';

function App() {
  console.log("we loaded");
  // User input from Search form
  const [userInput, setUserInput] = useState([]);
  const [sent, setSent] = useState([false]);
  const [filteredResponse, setFilteredResponse] = useState([]);
  // User results from search
  const [results, setResults] = useState([]);
  // Api results from axios
  const [soccerData, setData] = useState([]);
  // Filter results after user search results

  // const [filterParam, setFilterParam] = useState(["All"])
  // const [q, setQ] = useState("");
  // const [searchParam] = useState(["team", "league",'date']);

  ////// API REQUEST
  const getData = () => {
    axios.get("https://www.scorebat.com/video-api/v1/").then((response) => {
      console.log(response);
      const soccerData = response.data;
      setData(soccerData);
    });
  };
  useEffect(() => getData(), []);


  // function search(items) {
  //   return items.filter((item) => {
  //   if (item.region == filterParam) {
  //       return searchParam.some((newItem) => {
  //         return (
  //           item[newItem]
  //               .toString()
  //               .toLowerCase()
  //               .indexOf(q.toLowerCase()) > -1
  //                    );
  //                });
  //            } else if (filterParam == "All") {
  //                return searchParam.some((newItem) => {
  //                    return (
  //                        item[newItem]
  //                            .toString()
  //                            .toLowerCase()
  //                            .indexOf(q.toLowerCase()) > -1
  //                    );
  //                });
  //            }
  //        });
  //    }

  // const dummyData = data;
  ////// FORM SUBMIT
  const submit = (e) => {
    e.preventDefault();
    let userInput = {
      team: e.target[0].value,
      league: e.target[1].value,
      date: e.target[2].value,
    };
    setUserInput(userInput);
    //API RESPONSE
    setSent([true]);

    let cleanedApiData = soccerData.map((value) => {
      let team1 = value.side1.name;
      let team2 = value.side2.name;
      let videos = value.videos;
      let event = value.competition.name;
      let date = value.date;
      date = date.slice(0, 10);
      console.log("API-date", date);
      console.log("form-date", userInput.date);
      let newTeam = {
        team1: team1,
        team2: team2,
        videos: videos,
        event: event,
        date: date,
      };
      return newTeam;
    });

    let itemsToShow = cleanedApiData.filter(
      (team) =>
        // filter over all API response teams, finding where it matches the user input
        team.team1 === userInput.team ||
        team.team2 === userInput.team ||
        team.event === userInput.league ||
        team.date === userInput.date
    );

    setResults(itemsToShow);
    console.log(itemsToShow);
  };

  const filterList = (e) => {
    console.log(e.target.value);
    console.log(e.target);
    console.log(results);
    let name = e.target.getAttribute("name");

    if (name === "team") {
      const updatedList = results.filter((item) => {
        console.log(item);
        return (
          item.team1.toLowerCase().search(e.target.value.toLowerCase()) !== -1
        );
      });
      setResults(updatedList);
    }
  };

  const handleSelect = (e) => {
    if (
      e.target.innerHTML !== "Teams" &&
      e.target.innerHTML !== "Events" &&
      e.target.innerHTML !== "Dates"
    ) {
      console.log(results);
      console.log(userInput);
      if (
        e.target.parentElement.parentElement.children[0].id === "team-dropdown"
      ) {
        setUserInput({ ...userInput, team: e.target.innerHTML });
        console.log(userInput);
        
      } else if (
        e.target.parentElement.parentElement.children[0].id === "event-dropdown"
      ) {
        console.log(e.target.innerHTML);
        let temp= e.target.innerHTML
        filteredResults(temp)
      } else if (
        e.target.parentElement.parentElement.children[0].id === "date-dropdown"
      ) {
        setUserInput({ ...userInput, date: e.target.innerHTML });
        console.log(userInput);
      }
    }
  };
  const filteredResults = (temp) => {
    console.log(temp);
    if (userInput.team && userInput.date) {
      let itemsToShow = results.filter(
        (team) =>
          // filter over all API response teams, finding where it matches the user input
          team.team1 === userInput.team ||
          (team.team2 === userInput.team &&
            team.event === userInput.league &&
            team.date === userInput.date)
      );
      console.log(itemsToShow);
      setResults(itemsToShow);
    } else if (userInput.team && !userInput.date) {
      let itemsToShow = results.filter(
        (team) =>
          // filter over all API response teams, finding where it matches the user input
          team.team1 === temp ||
          (team.team2 === temp && team.date === userInput.league)
      );
      console.log(itemsToShow);

      setResults(itemsToShow);
    } else if (!userInput.team && userInput.date) {
      console.log(results, userInput);
      let itemsToShow = results.filter(
        (team) =>
          // filter over all API response teams, finding where it matches the user input
          team.event === temp && team.date === userInput.date
      );
      console.log(itemsToShow);
      setResults(itemsToShow);
      setUserInput({ ...userInput, league: temp});

      console.log(results);
    }
  };

    useEffect(() => { setResults(results)}, [])
    useEffect(() => { setUserInput(userInput)}, [])

  console.log(results, userInput)

  return (
    <div className="App">
      <Header />
      <Search submit={submit} />
      <Container
        setResults={setResults}
        filterList={filterList}
        dummyData={soccerData}
        formResponse={userInput}
        filterToggle={sent}
        results={results}
        handleSelect={handleSelect}
      />
    </div>
  );
}

export default App;
// https://gomockingbird.com/projects/wp62ohw
