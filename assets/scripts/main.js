import { displayEvents } from "./displayEvents.js";
import { getAllEvents } from "./getAllEvents.js";
import "./setAttendances.js";

getAllEvents()
 .then((eventsJson) => {
    displayEvents(eventsJson);
 })