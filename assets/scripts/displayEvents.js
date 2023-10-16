import { displayAttendances } from "./displayAttendancesFrom.js";

// Récupère la div "events-list" qui contiendra tous les évènements
const eventsList = document.querySelector('.events-list');


export function displayEvents(allEvents) {
    console.log('allEvents : ', allEvents);

    // Pour chaque évènement ...
    allEvents.forEach(event => {
        // console.log('event : ', event);
        
        // Crée la div "event-item" qui contiendra un évènement
        const eventItem = document.createElement('div');
        eventItem.classList.add('event-item');
        
        // Start - title-btn
        const titleBtn = document.createElement('div');
        titleBtn.classList.add('titleBtn');

        const name = document.createElement('h2');
        name.textContent = event.name;
        
        const btnContainer = document.createElement('div');
        const btnUpdate = document.createElement('button');
        btnUpdate.textContent = 'Modify';
        const btnAddDate = document.createElement('button');
        btnAddDate.textContent = 'Add date(s)';
        const btnDelete = document.createElement('button');
        btnDelete.textContent = 'Delete';
        
        btnContainer.appendChild(btnUpdate);
        btnContainer.appendChild(btnAddDate);
        btnContainer.appendChild(btnDelete);
        
        titleBtn.appendChild(name);
        titleBtn.appendChild(btnContainer);
        // End - title-btn

        // Start - description
        const description = document.createElement('p');
        description.textContent = event.description;
        // End - description

        // Start - table
        const table = document.createElement('table');
        // thead
        const thead = document.createElement('thead');
        const trh = document.createElement('tr');
        const th = document.createElement('th');
        th.textContent = '';
        trh.appendChild(th);
        thead.appendChild(trh);
        let dates = event.dates;

        dates.forEach(proposal => {
            const td = document.createElement('td');
            td.textContent = proposal.date;
            trh.appendChild(td);
            thead.appendChild(trh);
        });
        table.appendChild(thead);

        // tbody
        const tbody = document.createElement('tbody');
        let proposals = event.dates[0].attendees.map(proposal => proposal);
        
        for (let i = 0; i < proposals.length; i++) {
            const trb = document.createElement('tr');
            const td = document.createElement('td');
            td.textContent = proposals[i].name;
            trb.appendChild(td);

            event.dates.forEach(el => {
                const td = document.createElement('td');
                // td.textContent = el.attendees[i].available;
                if (el.attendees[i].available === true) {
                    td.textContent = 'V';
                    td.style.color = 'rgba(0, 128, 0, 0.6)';
                }
                else if (el.attendees[i].available === false) {
                    td.textContent = 'X';
                    td.style.color = 'rgba(220, 20, 60, 0.6)';
                }
                else {
                    td.textContent = '';
                }
                trb.appendChild(td);
            })
            
            tbody.appendChild(trb);
        };
        table.appendChild(tbody);
        // End - table


        // Ajoute tous les éléments de l'évènement
        eventItem.appendChild(titleBtn);
        eventItem.appendChild(description);
        eventItem.appendChild(table);
        
        // Add availability edit
        displayAttendances(event.dates, event.id, eventItem);

        // Ajoute l'évènement à la liste
        eventsList.appendChild(eventItem);
        // console.log(eventsList);
    });

}