const express=require('express')
const app=express()
const fs=require('fs')
const https = require('https')
const api=require('./api')
const handlebars = require('express-handlebars');
const path=require('path')




app.engine('.hbs', handlebars({ defaultLayout: 'index', extname: '.hbs',partialsDir:path.join(__dirname, '..','public','views','partials') }));
app.set('views', path.join(__dirname, '..','public','views'));
app.set('view engine', '.hbs');




app.get('/cms',(req,res)=>{
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0
    api.auth(api.cmsComponents,req,res)
});

app.get('/cms/:siteId/:id',(req,res)=>{
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0
    api.auth(api.cmsComponentDetails,req,res)
});



https.createServer({
    
    
    key: fs.readFileSync('./51151600_localhost7001.key'),
    cert: fs.readFileSync('./51151600_localhost7001.cert'),
    passphrase: 'YOUR PASSPHRASE HERE'
}, app)
.listen(7001);