const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    let newVar;
    let date = new Date();
    let day = date.getDay();
    if(day==0 || day==6) newVar = "Weekend";
    res.render('list', {varName:newVar});
})


app.listen(3000); 
