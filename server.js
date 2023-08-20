const express = require('express');
const whois = require('whois');
const path = require('path'); // Import the 'path' module

const app = express();
const port = 3000; // You can use any port you prefer

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/whois', (req, res) => {
    // ... Your existing WHOIS route handler
    const domain = req.query.domain;
    if (!domain) {
        res.status(400).send('Missing domain parameter');
        return;
    }

    whois.lookup(domain, (err, data) => {
        if (err) {
            console.error('Error:', err);
            res.status(500).send('Error fetching WHOIS data');
        } else {
            res.send(data);
        }
    });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
