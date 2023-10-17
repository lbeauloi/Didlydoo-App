// find and display the best date for an event based on the attendees
export function findBestDate(event, div)
{
    let bestAttendances = [0, 0];
    let bestDate = null;

    // check if there is only one date
    if (event.dates.length == 1)
    {
        bestDate = event.dates[0].date;
        div.textContent = `The best date for this event is: ${bestDate}`;
        return;
    }

    // if more than one date look for the best one
    event.dates.forEach(date => {
        if (bestDate == null)
        {
            date.attendees.forEach(attendee => {
                if (attendee.available) bestAttendances[0] += 1;
                else bestAttendances[1] += 1;
            });
            bestDate = date.date;
        }
        else
        {
            let newAttendances = [0, 0];
            date.attendees.forEach(attendee => {
                if (attendee.available) newAttendances[0] += 1;
                else newAttendances[1] += 1;
            });

            if (newAttendances[0] > bestAttendances[0] || newAttendances[1] < bestAttendances[1])
            {
                bestAttendances = Array.from(newAttendances);
                bestDate = date.date;
            }
        }

        div.textContent = `The best date for this event is: ${bestDate}`;
    });
}