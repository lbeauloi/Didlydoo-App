const url = 'http://localhost:3000';

export async function getEvent(id) 
{
    const response = await fetch(`${url}/api/events/${id}`, 
    {
        method: "GET",
    });

    return response.json();
}