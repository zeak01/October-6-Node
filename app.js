const express = require('express')
const app = express()
const fs = require('fs')

app.get('/home', (req, res) => {
    // res.send('<h1>The World cannot fully recover from my Home Page</h1>')
    res.sendFile('./zeakman/home.html', {root: __dirname})
})

app.get('/about', (req, res) => {
    // res.send('You are welcome to my about page')
    res.sendFile('./zeakman/about.html', {root: __dirname})
})

app.get('/administration', (req, res) => {
    // res.send('You are welcome to my Administration page')
    res.sendFile('./zeakman/administration.html', {root: __dirname})
})

app.get('/admissions', (req, res) => {
    // res.send('You are welcome to my Admission page')
    res.sendFile('./zeakman/admissions.html', {root: __dirname})
})

app.get('/centres', (req, res) => {
    // res.send('You are welcome to my Centres page')
    res.sendFile('./zeakman/centres.html', {root: __dirname})
})

app.get('/colleges', (req, res) => {
    // res.send('You are welcome to my Colleges page')
    res.sendFile('./zeakman/colleges.html', {root: __dirname})
})

app.get('/faculties', (req, res) => {
    // res.send('You are welcome to my Faculties')
    res.sendFile('./zeakman/faculties.html', {root: __dirname})
})

app.get('/institutes', (req, res) => {
    // res.send('You are welcome to my Institutes page')
    res.sendFile('./zeakman/institutes.html', {root: __dirname})
})

app.get('/library', (req, res) => {
    // res.send('You are welcome to my Library')
    res.sendFile('./zeakman/library.html', {root: __dirname})
})


app.get('/students', (req, res) => {
    // res.send('You are welcome to my Students')
    res.sendFile('./zeakman/students.html', {root: __dirname})
})


app.get('/tetfund', (req, res) => {
    // res.send('You are welcome to my TETFUND')
    res.sendFile('./zeakman/tetfund.html', {root: __dirname})
})

app.get('/units', (req, res) => {
    // res.send('You are welcome to my UNITS Page')
    res.sendFile('./zeakman/units.html', {root: __dirname})
})


app.listen(3000, () => {
    console.log('App is running smoothly on http://localhost:3000')
})