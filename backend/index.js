const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
const fs = require('fs');
const https = require('https');
const cors = require('cors');
global.db = require('./models');
global.RestError = require('./util/RestError');
global._ = require('lodash');
global.env = process.env.NODE_ENV || 'development';
global.config = require('./config/config')[env]

app.use(cors());
 
app.use((req,res,next) => {
	console.log(req.url);
next();
});

// BODY PARSER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

// HEADERS

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods","*");
    res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept,Authorization");
    next();
})

app.use(express.static(process.cwd()+"/../frontend/dist/LetwinCoFrontend/"));

/* Serves Angular Front end*/
app.get('/', (req,res) => {
  res.sendFile(process.cwd()+"/../frontend/dist/LetwinCoFrontend/index.html")
});
app.use(require('./util/errorHandler'))

app.use('/api',require('./api'))

app.listen(port, () => {
  db.sequelize.sync().then(()=>{
    console.log(`Server listening on the port::${port}`);
  })
});
