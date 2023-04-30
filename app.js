const express = require('express');
const path = require('path');
const PORT = 8080;

const app = express();

app.get('/', (req,res) => {
    console.log("HY =======>>>>");
    res.sendFile(path.join(__dirname, 'public' , 'index.html'));
})

app.listen(PORT, ()=>{
    console.log(`Listening On Port 3000`);
})
