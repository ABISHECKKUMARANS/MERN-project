const express = require('express');
let router = express.Router();

const users = [{ id: 1, name: 'John', age: 25 }, { id: 2, name: 'Jane', age: 22 }];

router.get('/', (req, res) => {
    res.send('User Information');
});

router.get('/adduser', (req, res) => {
    res.send('Add new user');
});

router.get('/deluser', (req, res) => {
    res.send('Delete user');
});

router.route('/:id')
.get((req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (user) {
        res.send('Get a user with ID: ' + req.params.id )
        console.log( ' Name: ' + user.name);
        console.log( ' Age: ' + user.age);

    } else {
        res.status(404).send('User not found');
    }
})
.post((req, res) => {
    res.send('Add a user with ID: ' + req.params.id);
})
.put((req, res) => {
    res.send('Update a user with ID: ' + req.params.id);
})
.delete((req, res) => {
    res.send('Delete a user with ID: ' + req.params.id);
});

module.exports = router;