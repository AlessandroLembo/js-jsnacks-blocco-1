console.log(' JS OK');

/*
TRACCIA

SNACK 2
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
l’utente inserisce il suo nome tramite un input. 
Comunicagli se può partecipare o no alla festa. 
*/

/*
ANALISI
1 - Creare un array con i nomi degli invitati.
2 - Prendere gli elementi dalla pagina.
3 - Collego il button a un event listener.
4 - Inserisco il nome dell'utente e lo salvo in una variabile.
5 - Effettuo un primo controllo per verficare se ho inserito qualcosa nell'input.
6 - Dichiaro una variabile a cui assegno un valore booleano.
7 - Dichiaro un variabile in cui salvo un messaggio per i non invitati.
8 - Controllo se l'utente è stato invitato alla festa.
9 - Stampo in pagina il messaggio.

*/

// 1 - Creare un array con i nomi degli invitati.
const listParticipant = ['Ale', 'Marco', 'Edo', 'Giulia', 'Anna'];
// console.log(listParticipant);


// 2 - Prendere gli elementi dalla pagina.
const participantElement = document.getElementById('participant');
const checkUserElement = document.getElementById('check-user');
const messageElement = document.getElementById('message');
// console.log(participantElement, checkUserElement, messageElement);

// 3 - Collego il button a un event listener
checkUserElement.addEventListener('click', function() {
     
    // 4 - Inserisco il nome dell'utente e lo salvo
    const nameParticipant = participantElement.value.trim();

    // 5 - Controllo se ho cliccato lasciando il campo vuoto
    if (!nameParticipant) {
        messageElement.innerText = "Inserisci un nome prima di cliccare";
        return;
    } 

    // 6e7 - Dichiaro 2 varabili.
    let isInvited = false;
    let messageAccess = "Non è stato invitato";

    // 8 - Controllo se l'utente è stato invitato alla festa.
    for (let i = 0; i < listParticipant.length && !isInvited; i++) {
        const currentUser = listParticipant[i];

        if (currentUser === nameParticipant) {
            isInvited = true;
            messageAccess = "Puo' entrare alla festa";
        }
    }

    // 9 - Stampo in pagina il messaggio
    messageElement.innerText = messageAccess;
 
})
