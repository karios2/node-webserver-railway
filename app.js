const express = require('express')
const hbs = require('hbs');
require('dotenv').config();
const app = express()
const port = process.env.PORT;


// Configuración de Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estático desde el directorio 'public'
app.use(express.static('public'));

// Ruta raíz para renderizar home.hbs
app.get('/', (req,res) => {
  res.render('home', { // estos son los argumentos
    nombre: 'Armando David',
    titulo: 'Curso de Node'
  });
})


// Ruta para elements
app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: 'Armando David',
    titulo: 'Curso de Node'
  });
});

// Ruta para generic
app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: 'Armando David',
    titulo: 'Curso de Node'
  });
});

//Ruta para salida
app.get('/salidas', (req, res) => {
  res.render('salidas', {
    nombre: 'Armando David Espinoza',
    titulo: 'Curso de Node'
  })
});


// Otras rutas
app.get('/hola-mundo', (req, res) => {
  res.send('Hola Mundo en su respectiva ruta');
});

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
