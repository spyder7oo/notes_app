function deleteNote(noteId) {
    fetch('/delete-note', {
        method: 'POST',
        body: JSON.stringify({ noteid: noteId })
    }).then((_res) => {
        window.location.href = "/";
    })
}