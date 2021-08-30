import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Search from "./components/Search/Search";
import Container from "./components/Container/Container";
import Header from "./components/Header/Header.js";

export default function App() {
  // User input from Search form
  const [userInput, setUserInput] = useState([]);
  // State for filtered view
  const [filteredResponse, setFilteredResponse] = useState([]);
  // User results from search
  const [results, setResults] = useState([]);
  // Api results from axios
  const [soccerData, setSoccerData] = useState([]);
  // Dropdown Button Text
  const [buttonState, setButtonState] = useState({
    Teams: "Teams",
    Events: "Events",
    Dates: "Dates",
  });

  ////// API REQUEST
  const getData = async () => {
    const soccerData = await axios.get(
      "https://www.scorebat.com/video-api/v1/"
    );
    console.log(soccerData.data.length);
    setSoccerData(soccerData.data);
  };
  useEffect(() => getData(), []);

  ////// FORM SUBMIT
  const submit = (e) => {
    e.preventDefault();
    // Condition if user input is empty
    if (!e.target[0].value && !e.target[1].value && !e.target[2].value) {
      alert("Please enter 1 search criteria");
    } else {
      const userInput = {
        team: e.target[0].value,
        league: e.target[1].value,
        date: e.target[2].value,
      };
      setUserInput(userInput);

      //Filter API RESPONSE
      const cleanedApiData = soccerData.map((value) => {
        const team1 = value.side1.name;
        const team2 = value.side2.name;
        const videos = value.videos;
        const event = value.competition.name;
        const date = value.date.slice(0, 10);

        const newTeam = {
          team1: team1,
          team2: team2,
          videos: videos,
          event: event,
          date: date,
        };
        return newTeam;
      });

      let finalResults = [];
      if (userInput.team) {
        const teamFinalResults = cleanedApiData.filter(
          (team) =>
            team.team1 === userInput.team || team.team2 === userInput.team
        );
        if (teamFinalResults.length > 0) {
          finalResults = teamFinalResults;
        } else {
          alert("Invalid Team name, please try again");
        }
      }
      if (userInput.league) {
        if (finalResults.length > 0) {
          const leagueFinalResults = finalResults.filter(
            (team) => team.event === userInput.league
          );
          if (leagueFinalResults.length > 0) {
            finalResults = leagueFinalResults;
          } else {
            alert("No League/Event Name for the team, please try again");
          }
        } else {
          const leagueFinalResults = cleanedApiData.filter(
            (team) => team.event === userInput.league
          );
          if (leagueFinalResults.length > 0) {
            finalResults = leagueFinalResults;
          } else {
            alert("no results for that league");
          }
        }
        console.log(finalResults);
      }
      if (userInput.date) {
        if (finalResults.length > 0) {
          const dateFinalResults = finalResults.filter(
            (team) => team.date === userInput.date
          );
          if (dateFinalResults.length > 0) {
            finalResults = dateFinalResults;
          } else {
            alert("No results for that Date, please try again");
          }
        } else {
          const dateFinalResults = cleanedApiData.filter(
            (team) => team.date === userInput.date
          );
          finalResults = finalResults.concat(dateFinalResults);
        }
        console.log(finalResults);
      }
      console.log(finalResults);
      if (finalResults.length > 0) {
        setResults(finalResults); // stores original results
        console.log(finalResults);
        setFilteredResponse(finalResults); // sets new filter results
      } else {
        alert("No results, please try again");
      }
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
        const temp = e.target.innerHTML;
        const displayTemp = temp.slice(0, 10) + "...";
        setButtonState({ ...buttonState, Teams: displayTemp });
        const itemsToShow = results.filter(
          (team) =>
            // filter over all API response teams, finding where it matches the user input
            team.team1 === temp || team.team2 === temp
        );
        setResults(itemsToShow);
      } else if (
        e.target.parentElement.parentElement.children[0].id === "event-dropdown"
      ) {
        setUserInput({ ...userInput, league: e.target.innerHTML });
        const temp = e.target.innerHTML;
        const displayTemp = temp.slice(0, 10) + "...";
        setButtonState({ ...buttonState, Events: displayTemp });
        const itemsToShow = results.filter(
          (team) =>
            // filter over all API response teams, finding where it matches the user input
            team.event === temp
        );
        setResults(itemsToShow);
      } else if (
        e.target.parentElement.parentElement.children[0].id === "date-dropdown"
      ) {
        setUserInput({ ...userInput, date: e.target.innerHTML });
        console.log(userInput);
        const temp = e.target.innerHTML;
        const displayTemp = temp.slice(0, 10) + "...";
        setButtonState({ ...buttonState, Dates: displayTemp });

        const itemsToShow = results.filter(
          (team) =>
            // filter over all API response teams, finding where it matches the user input
            team.date === temp
        );
        setResults(itemsToShow);
      }
    }
  };

  // Handles Reset Search button
  const resetTheState = () => {
    setUserInput([]);
    setFilteredResponse([]);
    setResults([]);
    setSoccerData([]);
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
      <Search 
      submit={submit} 
      handleClear={handleClear} 
      />
      <Container
        setResults={setResults}
        formResponse={userInput}
        results={results}
        filteredResponse={filteredResponse}
        handleSelect={handleSelect}
        clearBtn={clearBtn}
        buttonState={buttonState}
      />
    </div>
  );
}

// https://gomockingbird.com/projects/wp62ohw
