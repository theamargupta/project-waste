const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

//Define path for express config
const publicDirPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates/views')
const partialPath = path.join(__dirname, '../templates/partials')

// Setup handleBars engine 
app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialPath)


//setup static drectory ot serve
app.use(express.static (publicDirPath))

app.get('', (req, res)=>{
    res.render('index', {
        title: 'Weather',
        name: 'amar'
    })
})

app.get('/help', (req, res)=>{
    res.render('help', {
        title: 'Help',
        name: 'amar',
        para: 'to het the information you can do everything'
    })
})

app.get('/about', (req, res)=>{
    res.render('about', {
        title: 'About Me',
        name: 'web developer'
    })
})

app.get('/weather', (req, res)=>{
    res.send("show weather")
 })

 app.get('/help/*', (req, res)=>{
     res.render('404', {
        title: '404',
        errMsg:'help artcile not found'
    })
 })
 
 app.get('*', (req, res)=>{
     res.render('404', {
         title: '404',
         errMsg:'page not found'
     })
 })
 
app.listen(3000, ()=>{
    console.log('http://127.0.0.1:3000')
}) 