const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);

app.get("/", function (req,res){
    res.sendStatus(200);
});

app.listen(app.get('port'), function(){
    console.log("Server started on port " + app.get('port'));
});