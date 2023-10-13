import { getAllEvents } from "./getAllEvents.js";
const url = 'http://localhost:3000';

//getAllEvents();

//console.log(`${url}/api/events/[id]`);

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
            //addAttendance(data, id);
        }
        else
        {
            console.log(data);
            //editAttendance(data, id);
        }
    })
}

async function addAttendance(data, id) 
{
    const response = await fetch(`${url}/api/events/${id}/attend`, 
    {
        method: "POST",
        body: data,
    });
    getAllEvents();
}

async function editAttendance(data, id) 
{
    const response = await fetch(`${url}/api/events/${id}/attend`, 
    {
        method: "PATCH",
        body: data, 
    });
    getAllEvents();
}

export async function getEvent(id) 
{
    const response = await fetch(`${url}/api/events/${id}`, 
    {
        method: "GET",
    });

    return response.json();
}

// getEvent('f5b6564b5dc4')
//     .then((data) => {
//         console.log(data);
//     })

//addAttendance()

// add data
//{ name: string, dates : [ { date: date 'YYYY-MM-DD', available: boolean (true/false) } ] }
// edit data
//{ name: string, dates : [ { date: date 'YYYY-MM-DD', available: boolean (true/false) } ] }