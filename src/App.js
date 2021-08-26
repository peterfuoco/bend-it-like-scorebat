import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Search from "./components/Search/Search";
import Container from "./components/Container/Container";
import Header from "./components/Header/Header.js";
const initialState = {};

function App() {
  // User input from Search form
  const [userInput, setUserInput] = useState([]);
  //Toggle container view
  const [sent, setSent] = useState([false]);
  // State for filtered view
  const [filteredResponse, setFilteredResponse] = useState([]);
  // User results from search
  const [results, setResults] = useState([]);
  // Api results from axios
  const [soccerData, setSoccerData] = useState([]);
  // Filter results after user search results
  const [initialSubmit, setInitialSubmit] = useState([]);
  // useEffect(() => { setInitialSubmit(initialSubmit)}, [])
  const [buttonState, setButtonState] = useState({
    Teams: "Teams",
    Events: "Events",
    Dates: "Dates",
  });

  ////// API REQUEST
  const getData = () => {
    axios.get("https://www.scorebat.com/video-api/v1/").then((response) => {
      const soccerData = response.data;
      setSoccerData(soccerData);
    });
  };
  useEffect(() => getData(), []);

  ////// FORM SUBMIT
  const submit = (e) => {
    e.preventDefault();
    // Condition if user input is empty 
    if (!e.target[0].value && !e.target[1].value && !e.target[2].value) {
      alert("Please enter 1 search criteria");
    } else {
      let userInput = {
        team: e.target[0].value,
        league: e.target[1].value,
        date: e.target[2].value,
      };
      setUserInput(userInput);
  
      setSent([true]);
      //Filter API RESPONSE
      let cleanedApiData = soccerData.map((value) => {
        let team1 = value.side1.name;
        let team2 = value.side2.name;
        let videos = value.videos;
        let event = value.competition.name;
        let date = value.date;
        //Format date to MMDDYYYY format
        date = date.slice(0, 10);
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
      setFilteredResponse(itemsToShow);
    }
  };
//Function to handle filter button selection
  const handleSelect = (e) => {
    //Verify the target is not the dropdown menu title button before updating results
    if (
      e.target.innerHTML !== "Teams" &&
      e.target.innerHTML !== "Events" &&
      e.target.innerHTML !== "Dates"
    ) {
      if (
        e.target.parentElement.parentElement.children[0].id === "team-dropdown"
      ) {
        setUserInput({ ...userInput, team: e.target.innerHTML });
        let temp = e.target.innerHTML;
        let displayTemp = temp.slice(0, 10) + "...";
        setButtonState({ ...buttonState, Teams: displayTemp });
        let itemsToShow = results.filter(
          (team) =>
            // filter over all API response teams, finding where it matches the user input
            team.team1 === temp || team.team2 === temp
        );
        setResults(itemsToShow);
        resetTheFilter();
      } else if (
        e.target.parentElement.parentElement.children[0].id === "event-dropdown"
      ) {
        setUserInput({ ...userInput, league: e.target.innerHTML });
        let temp = e.target.innerHTML;
        let displayTemp = temp.slice(0, 10) + "...";
        setButtonState({ ...buttonState, Events: displayTemp });
        let itemsToShow = results.filter(
          (team) =>
            // filter over all API response teams, finding where it matches the user input
            team.event === temp
        );
        setResults(itemsToShow);
        resetTheFilter();
      } else if (
        e.target.parentElement.parentElement.children[0].id === "date-dropdown"
      ) {
        setUserInput({ ...userInput, date: e.target.innerHTML });
        console.log(userInput);
        let temp = e.target.innerHTML;
        let displayTemp = temp.slice(0, 10) + "...";
        setButtonState({ ...buttonState, Dates: displayTemp });

        let itemsToShow = results.filter(
          (team) =>
            // filter over all API response teams, finding where it matches the user input
            team.date === temp
        );
        setResults(itemsToShow);
        resetTheFilter();
      }
    }
  };
  //Put initial search results back into Container component
  const resetTheFilter = () => {
    setInitialSubmit(results);
  };

// Handles Reset Search button
  const resetTheState = () => {
    setUserInput([]);
    setSent([]);
    setFilteredResponse([]);
    setResults([]);
    setSoccerData([]);
    setInitialSubmit([]);
    setButtonState({ Teams: "Teams", Events: "Events", Dates: "Dates" });
  };
  //Pass the function to Search form to reset form fields and all initialstates
  const handleClear = (e) => {
    e.preventDefault();

    setTimeout(() => {
      resetTheState();
      getData();
    }, 1000);
  };


//Clears dropdown button text and changes back to initial state
  const clearBtn = () => {
    console.log(results);
    setResults(filteredResponse);
    console.log(results);
    setButtonState({ Teams: "Teams", Events: "Events", Dates: "Dates" });
  };

  return (
    <div className="App">
      <Header />
      <Search submit={submit} handleClear={handleClear} />
      <Container
        setResults={setResults}
        formResponse={userInput}
        filterToggle={sent}
        results={results}
        filteredResponse={filteredResponse}
        handleSelect={handleSelect}
        clearBtn={clearBtn}
        initialSubmit={initialSubmit}
        buttonState={buttonState}
      />
    </div>
  );
}

export default App;
// https://gomockingbird.com/projects/wp62ohw
