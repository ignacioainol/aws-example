const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Express with HTML");
})

app.listen(8080);
console.log("server running on port 8080");