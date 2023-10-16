import { getAllEvents } from "./getAllEvents.js";
import { getEvent } from "./getEvent.js";
const url = 'http://localhost:3000';

// called to edit the attendances
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

// add attendances with not already present name
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
        //getAllEvents();
      })
    .catch((error) => {
        console.error("Error :", error);
    });
}

// add attendances for already present name
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
        //getAllEvents();
      })
    .catch((error) => {
    console.error("Error :", error);
    });
}