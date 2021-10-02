// read the notes and display it on cards if present
showNotes();

let addNote = document.getElementById('addNote');
addNote.addEventListener('click', function (e) {

    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem("notes");
    if (notes == null)
        notesObj = [];

    else
        notesObj = JSON.parse(notes);

    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    console.log(notesObj);

    //displaying the data on notes 
    showNotes();
})

//function to show elements fromm localStorage
function showNotes(e) {
    let notes = localStorage.getItem("notes");
    if (notes == null)
        notesObj = [];

    else
        notesObj = JSON.parse(notes)

    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
        <div class="noteCard my-2 mx-2 card  border border-secondary rounded-bottom mb-3" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Note ${index + 1}</h5>
                <p class="card-text">${element}</p>
                <button id = "${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete note</button>
            </div>
        </div> 
        `
    });

    let noteElement = document.getElementById('notes');
    if (notesObj.length != 0) {
        noteElement.innerHTML = html;
    }
    else
        noteElement.innerHTML = "Nothing to show ! Add a note  "
}


//deleting the note
function deleteNote(index) {
    // console.log("deleting the node", index);
    let notes = localStorage.getItem("notes");

    if (notes == null)
        notesObj = [];

    else
        notesObj = JSON.parse(notes);

    
    notesObj.splice(index, 1);          // this is deleting the one value from the given index
    localStorage.setItem("notes", JSON.stringify(notesObj)); // updating the local storage and showing it again
    showNotes();
}


//implementing the searching functionality 
let search = document.getElementById('searchText')
search.addEventListener('input', function (e) {

    //taking a value for searching 
    let inputVal = search.value;

    // console.log('This is search text',inputVal);
    let noteCard = document.getElementsByClassName('noteCard')

    Array.from(noteCard).forEach(function (element) {
        let cardTxt = element.getElementsByTagName('p')[0].innerText; // getting the paragraph of card

        //if the current text matches the inputValue then display only the matching cards 
        if (cardTxt.includes(inputVal))
            element.style.display = 'block';

        else
            element.style.display = 'none';
    })
})
