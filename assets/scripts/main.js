//import { displayAttendances } from "./displayAttendancesFrom.js";
import { displayEvents } from "./displayEvents.js";
import { getAllEvents } from "./getAllEvents.js";
import "./setAttendances.js";

getAllEvents()
 .then((eventsJson) => {
    displayEvents(eventsJson);
 })
 
// let testDates = ["2022-03-17", '2022-03-18', '2022-03-21', '2022-03-22'];
// let testId = 'f5b6564b5dc4';
// let testParent = document.querySelector(".events-list").children[0];
// displayAttendances(testDates, testId, testParent);