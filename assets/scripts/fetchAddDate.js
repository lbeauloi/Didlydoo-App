

const url = 'http://localhost:3000';


export async function fetchAddDate(id, newDates) {
    console.log('newDates : ', newDates);
    console.log('id : ', id);

    fetch(`${url}/api/events/${id}/add_dates`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({dates: newDates}),
    })
        .then((response) => {
            if (response.ok) {
                console.log("Dates ajoutées avec succès.");
            } else {
                console.error("Erreur lors de l'ajout des dates.");
            }
            // // Masquer le formulaire
            // let modalAddDate = document.querySelector('.modalAddDate');
            // modalAddDate.classList.remove('active');
        })
        .catch((error) => {
            console.error("Erreur lors de la requête POST (fetchAddDate) :", error);
        });

}