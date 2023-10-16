
// import { displayEvents } from "./displayEvents.js";
const url = 'http://localhost:3000/api/';

export async function getAllEvents() {

    // ALL EVENTS
    const eventsResponse = await fetch(`${url}events/`);
    const eventsJson = await eventsResponse.json();
    // console.log('All events : ', eventsJson);

    //displayEvents(eventsJson);
    return eventsJson;

}
