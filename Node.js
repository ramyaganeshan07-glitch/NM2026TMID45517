const express = require('express');
const app = express();

app.use(express.json());

let contacts = [];

// Add Contact
app.post('/add', (req, res) => {
    const contact = {
        id: contacts.length + 1,
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email
    };
    contacts.push(contact);
    res.send("Contact Added Successfully");
});

// View Contacts
app.get('/contacts', (req, res) => {
    res.json(contacts);
});

// Update Contact
app.put('/update/:id', (req, res) => {
    const id = req.params.id;
    const contact = contacts.find(c => c.id == id);

    if(contact){
        contact.name = req.body.name;
        contact.phone = req.body.phone;
        contact.email = req.body.email;
        res.send("Contact Updated");
    } else {
        res.send("Contact Not Found");
    }
});

// Delete Contact
app.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    contacts = contacts.filter(c => c.id != id);
    res.send("Contact Deleted");
});

// Server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
