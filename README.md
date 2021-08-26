# App Overview
Bend It Like ScoreBat is a single page app that shows users Soccer data from ScoreBat's API based on a specific search input. Users can filter search results, and click the `Highlights` button to view as many available highlight videos for that soccer match.  

## Set-up
-Open terminal and clone down the repo 
`git clone git@github.com:peterfuoco/bend-it-like-scorebat.git`
-Navigate into the root level
-Run `npm install` to download dependencies 
-Run `npm start` to view the app in browser.
-If app doesn't open in browser automatically, go to http://localhost:3000/  

## Deployed URL
https://peterfuoco.github.io/bend-it-like-scorebat/

## How to use 
Type your desired search input into 1 search field in the form and click the submit button. You should see a list of results based on that 1 search criteria and be able to filter other results in dropdown menu buttons. You can click `Clear Filter` to reset the filter criteria, so that the original results when you clicked `Submit` are returned. Click the `Highlights` button to view soccer videos for that match.

## Technologies Used
• React
• HTML/CSS
• Axios
• React-Bootstrap
• CSS Bootstrap 
• React-Modal
• ScoreBat API - https://www.scorebat.com/video-api

### Resources Used
https://react-bootstrap.github.io/
https://stackoverflow.com/
https://developer.mozilla.org/en-US/
https://www.w3schools.com/

### Next Steps / Improvements
• Identify React Bootstrap bug where the Filter dropdown menus show up off screen. Currently this bug can be bypassed if the user re-clicks on the dropdown button and begins scrolls down
• Consolidate state for state variables that change which each other  
• Style modal and carousel so it is larger for desktop
• Re-factor CSS for mobile-first design, responsiveness for mobile  

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).