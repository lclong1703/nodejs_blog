const express = require('express')
const app = express()
const post = 5000

//app.get('/', (req,res) => res.send("Hello World!"))
 app.get('/', (req,res) => {
    var a = 1;
    var b = 2;
    var c = a + b;
    return res.send("Hello World!");
} )
app.listen(post, () => console.log(`Example app listening at http://localhost:${post}`))

