console.log('This  is the console ')

let addNote = document.getElementById('addNote');
addNote.addEventListener('click', function (e) {

    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem("note");
    if (notes == null)
        notesObj = [];

    else
        noteObj = JSON.parse(notes);

    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    console.log(notesObj);
    console.log(typeof localStorage)  
})