//Dependencies

const express = require('express');
const path = require('path');

// Express app

const app = express();
const PORT = 3000;

// App data parsing

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Data

const reservation = [
  {
    routeName: 'reservation',
    name: ' ',
    phoneNumber: ' ',
    email: ' ',
    uniqueId: ' ',
  }
] 

const waitList = [
  {
    routeName: 'waitlist',
    name: ' ',
    phoneNumber: ' ',
    email: ' ',
    uniqueId: ' ',
  }
]


// routes

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'view.html')));

app.get('/add', (req, res) => res.sendFile(path.join(__dirname, 'add.html')));





// Use `fetch` to run AJAX calls to GET and POST data from users to the Express server

app.post('/api/reservation', (req, res) => {
  const newReservation = req.body;

  newReservation.routeName = newReservation.name.replace(/\s+/g, '').toLowerCase();
  console.log(newReservation);

  reservation.push(newReservation);
  res.json(newReservation)
})



// Listen to the server

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));