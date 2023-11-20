const express = require('express');

const app = express();
const port = 3000;

app.use((req,res,next)=>{
    console.log(req.url)
    next();
})

app.get('/', (req,res)=>{
    res.send("Hello from the web server side...")
})


app.use(express.static('public'));



app.listen(port);