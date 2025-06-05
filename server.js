const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());

// In-memory data store
const businesses = [
    {
        id: 1,
        name: "EK 20 SALON",
        type: "Salon",
        services: ["Haircuts", "Coloring"],
        contact: "(231) 8819525647"
    },
    {
        id: 2,
        name: "PIPE LINE AUTO",
        type: "Mechanic",
        services: ["Oil Changes", "Brake Repair"],
        contact: "(231) 886612789"
    },
    {
        id: 3,
        name: "RED LIGHT CAR SALON",
        type: "Salon",
        services: ["Manicures", "Pedicures"],
        contact: "(231) 778678909"
    }
];

// API endpoint
app.get('/api/businesses', (req, res) => {
    res.json(businesses);
});

app.listen(PORT, () => {
    console.log(Server running on http://localhost:${PORT});
});