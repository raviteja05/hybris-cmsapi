const express = require('express')
const app = express()
const fs = require('fs')
const https = require('https')
const api = require('./api')
const path = require('path')

app.set('views', path.join(__dirname, '..', 'public', 'views'));
app.set('view engine', 'react');
app.use(express.static(path.join(__dirname, '..', 'public', 'build')))

app.get('/app/:page', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'build', 'index.html'))

});

app.get('/cms', (req, res) => {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0
    api.auth(api.cmsComponents, req, res)
});

app.get('/sites', (req, res) => {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0
    api.auth(api.sites, req, res)
});

app.get('/cms/:siteId/:id', (req, res) => {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0
    api.auth(api.cmsComponentDetails, req, res)
});

app.get('/cms-types', (req, res) => {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0
    api.auth(api.types, req, res)

});

app.get('/page-templates', (req, res) => {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0
    api.auth(api.pageTemplates, req, res)

});

https.createServer({
    key: fs.readFileSync('./51151600_localhost7001.key'),
    cert: fs.readFileSync('./51151600_localhost7001.cert'),
    passphrase: 'YOUR PASSPHRASE HERE'
}, app)
    .listen(7001);