console.log('This  is the console ')

// read the notes and display it on cards
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
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
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


//daleting the note
function deleteNote(index) {
    console.log("deleting the node", index);
    let notes = localStorage.getItem("notes");
    if (notes == null)
        notesObj = [];

    else
        notesObj = JSON.parse(notes);

    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}