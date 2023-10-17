
import { fetchUpdateEvent } from "./fetchUpdateEvent.js";

// Crée le formulaire "Update Event", puis lance la fonction fetchUpdateEvent
export async function updateEventForm(idToUpdate, nameToUpdate, authorToUpdate, descriptionToUpdate) {

    // Afficher le formulaire
    let updateForm = document.querySelector('.modalUpdate');
    updateForm.classList.add('active');

    // Masquer le formulaire
    let close = document.querySelector('.modalUpdate .close');
    close.addEventListener('click', function() {
        updateForm.classList.remove('active')
    })

    // Ajoute le 'placeholder' des inputs 
    let inputName = document.querySelector('#nameToUpdate');
    let inputAuthor = document.querySelector('#authorToUpdate');
    let inputDescription = document.querySelector('#descriptionToUpdate');
    inputName.setAttribute('placeholder', nameToUpdate);
    inputAuthor.setAttribute('placeholder', authorToUpdate);
    inputDescription.setAttribute('placeholder', descriptionToUpdate);

    // Envoie du formulaire
    let form = document.querySelector('#update-event-form');
    form.addEventListener('submit', function(e) {
        let newName = '', newAuthor = '', newDescription = '';
        newName = inputName.value;
        newAuthor = inputAuthor.value;
        newDescription = inputDescription.value;
    
         // Cree un objet avec les données du formulaire (pour l'envoyer dans l'api apres)
        const updateData = {
            name: newName !== '' ? newName : nameToUpdate,
            author: newAuthor !== '' ? newAuthor : authorToUpdate,
            description: newDescription !== '' ? newDescription : descriptionToUpdate
        };
        console.log('updateData : ', updateData);

        fetchUpdateEvent(e, idToUpdate, updateData);
    })


    // fetchUpdateEvent(id, updateData);
}

{/* <div id="modalForm" class="modal">
    <div class="modal-content">
        <span class="close">&times;</span>
        <h2>Create Event</h2>
        <form id="event-form">

        </form>
    </div>
</div> */}