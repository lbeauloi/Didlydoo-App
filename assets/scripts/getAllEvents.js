
// var dotenv = require('dotenv')
// var dotenvExpand = require('dotenv-expand')

// var myEnv = dotenv.config()
// dotenvExpand.expand(myEnv)

// console.log(process.env)
// -----------------------------------




export async function getAllEvents() {


    // ALL EVENTS
    const eventsResponse = await fetch('http://localhost:3000/api/events/');
    const eventsJson = await eventsResponse.json();
    console.log('All events : ', eventsJson);

    // // ALL ATTENDEES
    // // const eventsResponse = await fetch('http://localhost:3000/api/events/');
    // const urlApiAttendees = `${apiUrl}attendees/`;
    // const attendeesResponse = await fetch(urlApiAttendees);
    // const attendeesJson = await attendeesResponse.json();
    // console.log('All attendees : ', attendeesJson);

}
