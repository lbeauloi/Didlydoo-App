import { getAllEvents } from "./getAllEvents.js";
import { getEvent } from "./getEvent.js";
const url = 'http://localhost:3000';

export function setAttendances(data, id)
{
    let isNameThere;

    getEvent(id)
    .then((dataEvent) => {
        let isNameThere;

        for (let user of dataEvent.dates[0].attendees)
        {
            isNameThere = user.name == data.name;
            if (isNameThere) break;
        }

        if (isNameThere)
        {
            editAttendance(data, id);
        }
        else
        {
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
        getAllEvents();
      })
    .catch((error) => {
    console.error("Error :", error);
    });
}