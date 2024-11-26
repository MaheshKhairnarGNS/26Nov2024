
    //alert("Calling submitData...");
const form = document.getElementById('studentForm');

form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById('name').value;
    const response = await fetch('http://127.0.0.1:5000/api/save_students', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name }),
    });

    if (response.ok) {
        alert('Student added successfully!');
    } else {
        alert('Failed to save student.');
    }
});

