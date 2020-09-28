const path = require('path');
const express = require('express');
const publicPath = path.join(__dirname, '../public');

const app = express();

app.use(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(3000, () => {
    console.log('listening on port 3000');
});
