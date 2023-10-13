import { getAllEvents } from "./getAllEvents.js";
import { getEvent } from "./getEvent.js";
const url = 'http://localhost:3000';

export function setAttendances(data, id)
{
    let isNameThere;
    console.log(data.name);

    getEvent(id)
    .then((dataEvent) => {
        console.log(dataEvent.dates[0].attendees);
        let isNameThere;

        for (let user of dataEvent.dates[0].attendees)
        {
            console.log(user.name);
            console.log(data.name);
            isNameThere = user.name == data.name;
            if (isNameThere) break;
        }

        console.log(isNameThere);
        if (isNameThere)
        {
            editAttendance(data, id);
        }
        else
        {
            console.log(data);
            console.log(JSON.stringify(data));
            addAttendance(data, id);
        }
    })
}

async function addAttendance(data, id) 
{
    const response = await fetch(`${url}/api/events/${id}/attend`, 
    {
        method: "POST",
        headers: { 
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    .then((response) => {
        console.log("Attendance added");
        getAllEvents();
      })
    .catch((error) => {
    console.error("Error :", error);
    });
}

async function editAttendance(data, id) 
{
    const response = await fetch(`${url}/api/events/${id}/attend`, 
    {
        method: "PATCH",
        headers: { 
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data), 
    })
    .then((response) => {
        console.log("Attendance edited");
        getAllEvents();
      })
    .catch((error) => {
    console.error("Error :", error);
    });
}