document.addEventListener('DOMContentLoaded', function () {
    const noteInput = document.getElementById('noteInput');
    const addNoteButton = document.getElementById('addNoteButton');
    const noteList = document.getElementById('noteList');

    addNoteButton.addEventListener('click', function () {
        const noteText = noteInput.value.trim();
        if (noteText !== '') {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                ${noteText}
                <button class="delete-button">Delete</button>
            `;

            listItem.querySelector('.delete-button').addEventListener('click', function () {
                listItem.remove();
            });

            noteList.appendChild(listItem);
            noteInput.value = '';
        }
    });
});
